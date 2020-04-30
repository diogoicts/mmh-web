import React from 'react';

import { Container, Bar } from './styles';

const GoalsBars = () => {

  const data = [
    {
      label: 'Ajudar mais de 500 famílias',
      status: 345,
      goal: 500,
    },
    {
      label: 'Doar mais de 1500 cestas',
      status: 900,
      goal: 1500,
    },
    {
      label: 'Arrecadar 800 mil',
      status: 202,
      goal: 800,
    },
  ]

  return (
    <Container>
      <h1>Nossas metas para 2020</h1>
      <div>
        {
          data.map(item => (
            <Bar width={(item.status/item.goal).toFixed(2)*100} >
              <div>
                <label>{item.label}</label>
                <h4>{`${item.status}/${item.goal}`}</h4>
              </div>
              <div>
                <div />
              </div>
            </Bar>
          ))
        }
      </div>
    </Container>
  )
}

export default GoalsBars;
