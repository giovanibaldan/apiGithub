import React, { useEffect, useState } from 'react';
import { TableContainer, Table, TableHead, TableCell, TableBody, TableRow, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import './ReposAPI.css';

function ReposAPI({ searchQuery }) {
    const [repos, setRepos] = useState([]);

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
        <TableContainer className='tableData' sx={{ minWidth: 500, maxWidth: 650 }}>
            <Table aria-label="simple table">
                <TableHead className='tableHeadData'>
                    <TableRow>
                        <TableCell sx={{ fontSize: '1.1rem' }}>Repositórios</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {repos.map((repo) => (
                        <TableRow key={repo.id}>
                            <TableCell>
                                <Card sx={{ maxWidth: 700 }}>
                                    <CardActionArea component="a" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {repo.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {repo.description}
                                            </Typography>
                                            <Typography className='fav' variant='inherit'>
                                                <StarIcon className='favIcon' fontSize='small' />
                                                {repo.stargazers_count}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ReposAPI;
