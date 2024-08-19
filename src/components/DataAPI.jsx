import React, { useState, useEffect } from 'react';
import InputAPI from './InputAPI';
import CardAPI from './CardAPI';
import ReposAPI from './ReposAPI';
import Loading from './Loading';
import ErrorAPI from './ErrorAPI';

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

        const input = userInput.trim(); // Remover espaços no começo e no fim do input do usuário

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

        console.log(`Carregando a página ${page + 1} com fetch para o usuário: ${user}`);

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

    const fetchWithAuth = (url) => {
        return fetch(url, {
            headers: {
                // Authorization: `token ${GITHUB_TOKEN}``
            }
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
        <>
            <InputAPI handleSearch={handleSearch} handleSubmit={handleSubmit} />
            {isLoading ? (
                <Loading />
            ) : fetchError ? (
                <ErrorAPI userInput={fetchError} />
            ) : (
                photo && (
                    <div style={{ position: "absolute", display: "flex", alignItems: "flex-start", left: 0, width: "100%", paddingLeft: "22%" }}>
                        <CardAPI photo={photo} name={name} user={user} userInfo={userInfo} />
                        <ReposAPI repos={repos} />
                    </div>
                )
            )}
            {isLoadingMore && <Loading />}
        </>
    );
}

export default DataAPI;
