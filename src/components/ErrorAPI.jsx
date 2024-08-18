import React from "react";
import { Alert } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function ErrorAPI({ userInput }) {
    return (
        <Alert variant="outlined" severity="error" sx={{ fontSize: 27, padding: 3.5 }}
            iconMapping={{
                error: <ErrorOutlineIcon sx={{ fontSize: 40 }} />
            }}
        >
            Usuário "{userInput}" não encontrado.
        </Alert>
    );
}

export default ErrorAPI;
