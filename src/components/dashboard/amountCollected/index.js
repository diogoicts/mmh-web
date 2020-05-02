import React from 'react';

import { Container, Values, Chart, Legend} from './styles';

const AmountCollected = () => {

  const data = {
    amount: 202000,
    benefits: 1350,
    basic: 450,
    goal: 800000,
  }

  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <Container>
      <Values>
        <h1>Valor arrecadado</h1>
        <h2>{formatter.format(data.amount)}</h2>
        <h3>+{data.benefits}<span>&nbsp;pessoas beneficiadas</span></h3>
        <h4>+{data.basic}<span>&nbsp;cestas básicas doadas</span></h4>
      </Values>
      <Chart></Chart>
      <Legend></Legend>
    </Container>
  )
}

export default AmountCollected;
