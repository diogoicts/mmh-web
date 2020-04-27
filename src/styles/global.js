import { createGlobalStyle } from "styled-components";

// Reset CSS básico
export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #FFFFFF;
  }

  textarea, input, button {
    font: 400 14px 'Roboto', sans-serif;
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

  .input {
    width: 100%;
  }
`;
