import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import InputAPI from './InputAPI';
import ReposAPI from './ReposAPI';
import './DataAPI.css';

function DataAPI() {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [userInfo, setUserInfo] = useState('');
    const [photo, setPhoto] = useState('');
    const [userInput, setUserInput] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
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

    return (
        <>
            <InputAPI handleSearch={handleSearch} handleSubmit={handleSubmit} />
            {photo && (
                <div className='divCard'>
                    <Card sx={{ maxWidth: 250, minWidth: 250, minHeight: 'fit-content' }}>
                        <CardMedia sx={{ height: 250 }} image={photo} title={name} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography className='typoPad' variant="body2" color="text.secondary">
                                @{user}
                            </Typography>
                            {userInfo && (
                                <Typography variant="body2" color="text.primary">
                                    {userInfo}
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                    <ReposAPI searchQuery={searchQuery} />
                </div>
            )}
        </>
    );
}

export default DataAPI;
