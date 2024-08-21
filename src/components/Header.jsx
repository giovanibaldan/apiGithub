// Componente de Cabeçalho para a aplicação, que exibe um título centralizado
// com uma mensagem de busca por usuário no GitHub. O estilo é definido para 
// centralizar o título na página e ajustar dinamicamente o tamanho da fonte 
// com base no tamanho da tela usando a função `clamp`.

import React from 'react';

function Header() {
    return (
        <div style={{ display: "flex", justifyContent: "center", paddingTop: 20, paddingBottom: 20, width: "100%" }}>
            <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', textAlign: 'center' }}>Busca por usuário no Github</h1>
        </div>
    );
}

export default Header;
