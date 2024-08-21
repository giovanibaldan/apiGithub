// Componente para exibir as informações básicas de um usuário do GitHub em um cartão estilizado.
// O cartão inclui uma imagem de perfil do usuário, seu nome, nome de usuário e uma descrição opcional.
// É utilizado para apresentar informações resumidas do usuário.
// O layout do cartão é responsivo, adaptando-se a diferentes tamanhos de tela para garantir uma boa apresentação em dispositivos móveis e desktop.

import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function CardAPI({ photo, name, user, userInfo }) {
    return (
        <Card sx={{ width: { xs: '90%', sm: 250 }, minHeight: 'fit-content' }}>
            <CardMedia sx={{ height: 250, backgroundSize: 'contain' }} image={photo} title={name} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ paddingBottom: 1 }} variant="body2" color="text.secondary">
                    @{user}
                </Typography>
                {userInfo && (
                    <Typography variant="body2" color="text.primary">
                        {userInfo}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
}

export default CardAPI;
