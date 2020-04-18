import React from "react";
import "./App.css";
import { Router } from 'react-router-dom';

// Our modules
import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global';


const App = () => {

  return (
    <Router history={history}>
      <Routes></Routes>
      <GlobalStyle />
    </Router>
  )
}

export default App;
