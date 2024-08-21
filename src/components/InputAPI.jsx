// Componente de entrada para a aplicação, que inclui um campo de texto e um botão de busca.
// O campo de texto permite ao usuário inserir o nome de usuário do GitHub e o botão de busca 
// aciona a função de busca ao ser clicado ou ao submeter o formulário. O estilo é responsivo,
// ajustando a largura do campo de texto com base no tamanho da tela.

import React from 'react';
import { TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function InputAPI({ handleSearch, handleSubmit }) {
    return (
        <form style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingBottom: 75 }} onSubmit={handleSubmit}>
            <TextField sx={{ width: { xs: '70%', sm: 400 } }} label="@ do Github" id="fullWidth" onChange={handleSearch} />
            <Button variant="contained" size="small" onClick={handleSubmit}>
                <SearchIcon />
            </Button>
        </form>
    );
}

export default InputAPI;
