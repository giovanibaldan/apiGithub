import React, { useState } from 'react'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import InputAPI from './InputAPI'
import './DataAPI.css'

function DataAPI() {

    const [name, setName] = useState('')
    const [user, setUser] = useState('')
    const [userInfo, setUserInfo] = useState('')
    const [photo, setPhoto] = useState('')
    const [reposName, setReposName] = useState('')
    const [reposInfo, setReposInfo] = useState('')
    const [reposLink, setReposLink] = useState('')
    const [starsRepos, setReposStars] = useState('')
    const [userInput, setUserInput] = useState('')
    const [error, setError] = useState(null)

    const setData = ({ avatar_url, bio, login, name }) => {
        setPhoto(avatar_url);
        setUserInfo(bio);
        setUser(login);
        setName(name);
    }

    const setDataRepos = ({ name, description, html_url, stargazers_count }) => {
        setReposName(name);
        setReposInfo(description);
        setReposLink(html_url);
        setReposStars(stargazers_count);
    }

    const handleSearch = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.github.com/users/${userInput}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }

    return (
        <div>
            <InputAPI handleSearch={handleSearch} handleSubmit={handleSubmit} />
            {photo && (
                <div className='divCard'>
                    <Card sx={{ maxWidth: 250 }}>
                        <CardMedia
                            sx={{ height: 250 }}
                            image={photo}
                            title={name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography className='typoPad' variant="body2" color="text.secondary">
                                @{user}
                            </Typography>
                            <Typography variant="body2" color="text.primary">
                                {userInfo}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    )
}

export default DataAPI;
