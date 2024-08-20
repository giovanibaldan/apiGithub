// Componente para criar um contêiner flexível e responsivo que se ajusta 
// ao layout dependendo do tamanho da tela. Utiliza o sistema de grid do MUI
// para definir a direção do flex container e o alinhamento dos itens com base
// no tamanho da tela.

import React from "react";
import { Box } from "@mui/material";

function ResponsiveContent({ children }) {
    return (
        <Box sx={{ display: 'flex',  flexDirection: { xs: 'column', sm: 'row' },  alignItems: { xs: 'center', sm: 'flex-start' },  justifyContent: 'center',
        width: '100%',  maxWidth: '100%',  gap: 2,  boxSizing: 'border-box',  overflowX: { xs: 'hidden', sm: 'visible' }
        }}>
            {children}
        </Box>
    );
}

export default ResponsiveContent;
