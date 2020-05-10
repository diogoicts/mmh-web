import React from 'react';

import { Container, Values, ChartAndLegend, Chart, Legend} from './styles';
import PieChart from '../../pie-chart';
import blue_rect from '../../../assets/blue_rect.svg'
import green_rect from '../../../assets/green_rect.svg'
import houses_img from '../../../assets/houses_img.svg'


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

  const chart_data = [
    {
      "id": "amount",
      "label": 'Valor obtido',
      "formatted": 'R$ 202 mil' /*`${formatter.format(data.amount)}`*/,
      "value": data.amount,
    },
    {
      "id": "goal",
      "label": 'Faltam',
      "formatted": `R$ 800 mil`,
      "value": data.goal - data.amount,
    },
  ] 
 
  return (
    <Container>
      <Values>
        <h1>Valor arrecadado</h1>
        <h2>{formatter.format(data.amount)}</h2>
        <h3>+{data.benefits}<span>&nbsp;pessoas beneficiadas</span></h3>
        <h4>+{data.basic}<span>&nbsp;cestas básicas doadas</span></h4>
      </Values>
      <ChartAndLegend>
        <Chart>
          <PieChart data={chart_data} />
        </Chart>
        <Legend>
          <div>
            <div>
              <img src={blue_rect} alt='Legenda' />
              <h4>Meta</h4>
            </div>
            <div>
              <img src={green_rect} alt='Legenda' />
              <h4>Valor obtido</h4>
            </div>
          </div>
          <div>
            <img src={houses_img} alt='Casas' />
        </div>
        </Legend>
      </ChartAndLegend>
      
    </Container>
  )
}

export default AmountCollected;
