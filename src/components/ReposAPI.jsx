import React from 'react';
import './ReposAPI.css';
import { TableContainer, Table, TableHead, TableCell, TableBody, TableRow, Paper, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function ReposAPI() {

    return (
        <>
            <TableContainer className='tableData' sx={{ minWidth: 500, maxWidth: 650 }}>
                <Table aria-label="simple table">
                    <TableHead className='tableHeadData'>
                        <TableRow>
                            <TableCell sx={{ fontSize: '1.1rem' }}>Repositórios</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <Card sx={{ maxWidth: 700 }}>
                                {/* _blank = abrir o link em uma nova aba | noopener noreferrer = medida de segurança e privacidade do usuário */}
                                <CardActionArea component="a" href="https://github.com/giovanibaldan/monsterFly" target="_blank" rel="noopener noreferrer">
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            monsterFly
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Desenvolvimento de um projeto de jogo inspirado em Flappy Bird apenas com a utilização de HMTL, CSS e Javascript.
                                        </Typography>
                                        <Typography className='fav' variant='inherit'>
                                            <StarIcon className='favIcon' fontSize='small' />
                                            500
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TableRow>
                        <TableRow>
                            <Card sx={{ maxWidth: 700 }}>
                                {/* _blank = abrir o link em uma nova aba | noopener noreferrer = medida de segurança e privacidade do usuário */}
                                <CardActionArea component="a" href="https://github.com/giovanibaldan/monsterFly" target="_blank" rel="noopener noreferrer">
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            apiGithub
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Projeto sendo desenvolvido, volte aqui em breve!
                                        </Typography>
                                        <Typography className='fav' variant='inherit'>
                                            <StarIcon className='favIcon' fontSize='small' />
                                            0
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default ReposAPI;
