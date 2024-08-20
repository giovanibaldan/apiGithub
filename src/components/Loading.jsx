// Componente para exibir uma tela de carregamento. 
// Mostra um fundo escuro com opacidade e um indicador de progresso centralizado na tela.
// É utilizado para informar ao usuário que o conteúdo está sendo carregado ou processado.
// O fundo é fixo e ocupa toda a tela, garantindo que o indicador de carregamento seja visível e o conteúdo não seja acessível até que o carregamento seja concluído.

import React from 'react';
import { Box, CircularProgress } from '@mui/material';

function Loading() {
    return (
        <div style={darkBackground}>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress size={85} color="primary" />
            </Box>
        </div>
    );
}

const darkBackground = {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex',
    alignItems: 'center', justifyContent: 'center', zIndex: 100,
};

export default Loading;
