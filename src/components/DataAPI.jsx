import React, { useState } from 'react';
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
        fetch(`https://api.github.com/users/${userInput}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Usuário não encontrado');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                return fetch(`https://api.github.com/users/${userInput}/repos`);
            })
            .then((res) => res.json())
            .then((data) => {
                setRepos(Array.isArray(data) ? data : []);
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            })
            .catch((error) => {
                console.error("API fetch error:", error);
                setFetchError(userInput);
                setIsLoading(false);
            });
    };

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
        </>
    );
}

export default DataAPI;
