import { createGlobalStyle } from 'styled-components';


// Reset CSS básico
export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,700&display=swap');

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

  // Para facilitar a conversão px -> rem 
  html {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
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
