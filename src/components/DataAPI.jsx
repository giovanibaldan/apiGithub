import React, { useState, useEffect } from 'react';
import InputAPI from './InputAPI';
import CardAPI from './CardAPI';
import ReposAPI from './ReposAPI';
import Loading from './Loading';

function DataAPI() {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [userInfo, setUserInfo] = useState('');
    const [photo, setPhoto] = useState('');
    const [repos, setRepos] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
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
        setIsLoading(true);
        fetch(`https://api.github.com/users/${userInput}`) // Puxando os dados do usuário
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                return fetch(`https://api.github.com/users/${userInput}/repos`); // Puxando os dados dos repositórios do usuário
            })
            .then((res) => res.json())
            .then((data) => {
                setRepos(Array.isArray(data) ? data : []);
                setTimeout(() => {
                    setIsLoading(false);
                }, 1100);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            });
    };

    return (
        <>
            <InputAPI handleSearch={handleSearch} handleSubmit={handleSubmit} />
            {isLoading ? (
                <Loading />
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
