import styled from "styled-components";

export const Button = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
    padding: 8px;
    background-color: white;
    cursor: pointer;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    `;

export const Botao = styled.button`

    background-color: white;
    height: 40px;
    width: 100px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(2px);
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    `;



export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between; /* Ajusta o espaçamento entre os botões */
    align-items: center; /* Alinha os botões verticalmente */
    gap: 10px; /* Espaço entre os botões */
`;

export const ButtonLogin = styled.button`
    width: 110px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid black;
    padding: 8px;
    background-color: #4590BF;
    cursor: pointer;
    font-size: 19px;
    color: white;
    font-family: 'Roboto', sans-serif;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #333;
    }
`;

export const ButtonCadastro = styled(ButtonLogin)` /* Herda as propriedades do ButtonLogin */
    width: 150px; /* Largura maior para o texto do cadastro */
    /* As outras propriedades são herdadas do ButtonLogin */
`;

export const ButtonEnviar = styled(ButtonLogin)` 
    width: 180px;
    height: 50px;
`;