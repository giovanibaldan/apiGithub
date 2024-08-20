// Componente para exibir uma mensagem de erro quando um usuário não é encontrado
// na API. Utiliza o componente Alert do MUI para mostrar uma mensagem de erro com
// um ícone de erro. A mensagem inclui o nome do usuário que foi pesquisado e a
// estilização é responsiva, ajustando o tamanho da fonte e o padding com base na 
// largura da tela.

import React from "react";
import { Alert } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function ErrorAPI({ userInput }) {
    return (
        <Alert variant="outlined" severity="error" sx={{ fontSize: { xs: 16, sm: 27 }, padding: { xs: 2, sm: 3.5 } }}
            iconMapping={{ error: <ErrorOutlineIcon sx={{ fontSize: { xs: 25, sm: 40 } }} /> }}>
            Usuário "{userInput}" não encontrado.
        </Alert>
    );
}

export default ErrorAPI;
