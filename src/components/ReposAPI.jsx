// Componente para exibir uma lista de repositórios em formato de tabela. Cada
// linha da tabela contém um cartão com detalhes sobre o repositório, incluindo
// o nome, descrição e a contagem de estrelas. Utiliza o sistema de tabelas e
// cartões do MUI para layout e estilização. O cartão é clicável e leva ao URL
// do repositório no GitHub em uma nova aba.

import React from 'react';
import { TableContainer, Table, TableHead, TableCell, TableBody, TableRow, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function ReposAPI({ repos }) {
    return (
        <TableContainer sx={{ width: '100%', maxWidth: 700, paddingX: { xs: 0, sm: 2.5 } }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontSize: '1.1rem', display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>Repositórios</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {repos.map((repo, index) => (
                        <TableRow key={`${repo.id}-${index}`}>
                            <TableCell>
                                <Card sx={{ maxWidth: '100%' }}>
                                    <CardActionArea component="a" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {repo.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {repo.description}
                                            </Typography>
                                            <Typography sx={{ paddingTop: 2.5, display: 'flex', alignItems: 'center', margin: 0 }} variant='inherit'>
                                                <StarIcon sx={{ paddingRight: 1, color: "#e3b341" }} fontSize='small' />
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
