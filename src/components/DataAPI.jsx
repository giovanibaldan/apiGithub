// Componente principal que gerencia a lógica de busca e exibição de dados de um usuário do GitHub.
// Utiliza hooks do React para controle de estado e efeito colateral, e faz requisições para a API do GitHub
// para buscar informações do usuário e seus repositórios. Inclui funcionalidades de busca, carregamento
// infinito de repositórios e tratamento de erros.

import React, { useState, useEffect } from 'react';
import InputAPI from './InputAPI';
import CardAPI from './CardAPI';
import ReposAPI from './ReposAPI';
import Loading from './Loading';
import ErrorAPI from './ErrorAPI';
import Header from './Header';
import ResponsiveContent from './ResponsiveContent';

function DataAPI() {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [userInfo, setUserInfo] = useState('');
    const [photo, setPhoto] = useState('');
    const [repos, setRepos] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    const GITHUB_TOKEN = ''

    const fetchWithAuth = (url) => {
        return fetch(url, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        });
    };

    const setData = ({ avatar_url, bio, login, name }) => {
        setPhoto(avatar_url);
        setUserInfo(bio);
        setUser(login);
        setName(name);
    };

    const handleSearch = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setFetchError(null);
        setPage(1);
        setHasMore(true);

        const input = userInput.trim();

        fetchWithAuth(`https://api.github.com/users/${input}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Usuário não encontrado');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                return fetchWithAuth(`https://api.github.com/users/${input}/repos?per_page=30&page=1`);
            })
            .then((res) => res.json())
            .then((data) => {
                setRepos(Array.isArray(data) ? data : []);
                setIsLoading(false);
                setHasMore(data.length === 30);
            })
            .catch((error) => {
                console.error("API fetch error:", error);
                setFetchError(input);
                setIsLoading(false);
            });
    };

    const loadMoreRepos = () => {
        if (!hasMore || isLoadingMore) return;

        setIsLoadingMore(true);

        fetchWithAuth(`https://api.github.com/users/${user}/repos?per_page=30&page=${page + 1}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Erro ao carregar mais repositórios: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    setRepos(prevRepos => [...prevRepos, ...data]);
                    setPage(prevPage => prevPage + 1);
                    setHasMore(data.length === 30);
                } else {
                    setHasMore(false);
                }
                setIsLoadingMore(false);
            })
            .catch((error) => {
                console.error("Erro na API Fetch:", error);
                setIsLoadingMore(false);
            });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            if (scrollTop + windowHeight >= documentHeight - 300 && hasMore && !isLoadingMore) {
                loadMoreRepos();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasMore, isLoadingMore, user]);

    return (
        <div style={{ maxWidth: '100vw', margin: '0 auto', boxSizing: 'border-box' }}>
            <Header />
            <InputAPI handleSearch={handleSearch} handleSubmit={handleSubmit} />
            {isLoading ? (
                <Loading />
            ) : fetchError ? (
                <ErrorAPI userInput={fetchError} />
            ) : (
                <>
                    {user && (
                        <ResponsiveContent>
                            <CardAPI photo={photo} name={name} user={user} userInfo={userInfo} />
                            <ReposAPI repos={repos} />
                        </ResponsiveContent>
                    )}
                    {isLoadingMore && <Loading />}
                </>
            )}
        </div>
    );
}

export default DataAPI;
