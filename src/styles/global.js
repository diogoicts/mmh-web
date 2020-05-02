import { createGlobalStyle } from 'styled-components';

// Reset CSS básico
export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  
  html {
    /*font-size: 62.5%; */ /* Para facilitar a conversão px -> rem */ 
    font-size: ${props => props.rate}%; /* Outra forma de fazer a resposividade para desktops */
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Montserrat', sans-serif;
  }


  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`;
