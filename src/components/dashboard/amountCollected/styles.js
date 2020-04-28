import styled from 'styled-components';

export const Container = styled.div`
  height: 22rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:  #FED983;
  border-radius: 2rem;
  margin: 0rem 3rem;
  color: #3857A3;
  padding: 2rem 0rem 0rem 3rem;

  // Animações
  
  @-webkit-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; } 
    }
    @-moz-keyframes fadeIn {
    0% { opacity: 0;}
    100% { opacity: 1; }
    }
    @-o-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }
    @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }

    -webkit-animation: fadeIn 1s ease-in-out;
    -moz-animation: fadeIn 1s ease-in-out;
    -o-animation: fadeIn 1s ease-in-out;
    animation: fadeIn 1s ease-in-out;
`;

export const Values = styled.div`
  height: 100%;

  h1 {
    font-size: 2.4rem;
    font-weight: 600;
  }

  h2 {
    color: #0D2662;
    font-size: 3.6rem;
    font-weight: 600;
    margin-bottom: 3.5rem;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 1.5rem;

    span {
      font-size: 2.2rem;
      font-weight: 500;
    }
  }

  h4 {
    font-size: 1.6rem;
    font-weight: 700;

    span {
      font-size: 1.4rem;
      font-weight: 500;
    }
  }
`;

export const Chart = styled.div`
  
`;

export const Legend = styled.div`
  
`;