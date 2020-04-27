import React from 'react';

import { Container } from './styles';
import codese_logo from '../../assets/codese_logo.svg'

import api from "../../services/api";

const Login = () => {

    async function chama(){
        try {
            const response = await api.get("api/test-cors");
            alert(`${response.data}`);
          } catch (error) {
            console.log(error);
          }
    }

    return (
        <Container>
            <img src={codese_logo} alt='Codese Logo' />
            <h1>LOGIN</h1>
            <button onClick={chama}>teste de chamada</button>
        </Container>
    )
}

export default Login