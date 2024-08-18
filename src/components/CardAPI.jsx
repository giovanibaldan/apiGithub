import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function CardAPI({ photo, name, user, userInfo }) {
    return (
        <Card sx={{ maxWidth: 250, minWidth: 250, minHeight: 'fit-content' }}>
            <CardMedia sx={{ height: 250 }} image={photo} title={name} />
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
        </Card >
    );
}

export default CardAPI;
