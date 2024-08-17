import React, { useState, useEffect } from 'react';
import InputAPI from './InputAPI';
import CardAPI from './CardAPI';
import ReposAPI from './ReposAPI';
import './DataAPI.css';

function DataAPI() {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [userInfo, setUserInfo] = useState('');
    const [photo, setPhoto] = useState('');
    const [userInput, setUserInput] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);

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
        setSearchQuery(userInput);
        fetch(`https://api.github.com/users/${userInput}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        if (searchQuery) {
            fetch(`https://api.github.com/users/${searchQuery}/repos`)
                .then((res) => res.json())
                .then((data) => {
                    if (Array.isArray(data)) {
                        setRepos(data);
                    } else {
                        setRepos([]);
                    }
                })
                .catch((error) => {
                    console.error("Erro ao buscar repositórios:", error);
                    setRepos([]);
                });
        }
    }, [searchQuery]);

    return (
        <>
            <InputAPI handleSearch={handleSearch} handleSubmit={handleSubmit} />
            {photo && (
                <div className='divCard'>
                    <CardAPI photo={photo} name={name} user={user} userInfo={userInfo} />
                    <ReposAPI repos={repos} />
                </div>
            )}
        </>
    );
}

export default DataAPI;
