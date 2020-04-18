import React from 'react';

import { Container } from './styles';
import codese_logo from '../../assets/codese_logo.svg'

const Login = () => {

    return (
        <Container>
            <img src={codese_logo} alt='Codese Logo' />
            <h1>LOGIN</h1>
        </Container>
    )
}

export default Login