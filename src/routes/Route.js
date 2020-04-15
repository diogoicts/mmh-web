import React from 'react';
import { Route } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  path,
  ...rest
}) {

  // Aqui serão escritas as regras de negócio para acesso de rotas, 
  // para o caso de rotas privadas, autenticação, redirecionamento
  // e funções desse tipo.

  return (
    <Route {...rest} 
    render={props => (
        <Component {...props} />
      )}
    />
  );
}

