import React, { useMemo } from 'react';

import { Container } from './styles';
import LineChart from '../../line-chart';

const ChartByMonth = () => {

  const months = useMemo(() => (
    ['Abril', 'Maio', 'Junho', 'Julho', 'Agosto']
  ), []) 

  const data = [
    {
      "id": "japan",
      "data": months.map(month => {
        let dot ={}
        dot["x"] = month
        dot["y"] = Math.floor(Math.random()*20000)

        return dot
      })
    },
  ]

  return (
    <Container>
      <div>
        <h4>Valor arrecadado por mês</h4>
        <span>Detalhes</span>
      </div>
      <div>
        <LineChart data={data} />
      </div>
    </Container>
  );
}

export default ChartByMonth;