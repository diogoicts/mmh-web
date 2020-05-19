import React from "react";
import { Router } from "react-router-dom";

import Routes from "./routes";
import history from "./services/history";

import GlobalStyle from "./styles/global";
import useWindowSize from "./styles/optional-desktop-responsive"

import { Provider } from 'react-redux';
import { store } from './store'

const App = () => {

  //const rate = 62.5
  const rate = useWindowSize()

  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes></Routes>
        <GlobalStyle rate={rate} />
      </Router>
    </Provider>
  );
};

export default App;
