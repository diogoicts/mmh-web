import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 4rem 0rem 0rem 4rem;
  background-color: #fff;
  
  justify-content: row;  

  @media (max-width: 480px) {
    border-radius: 0rem;
  }
`;

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 72%;
  padding: 0rem 0rem 2rem 0rem;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const MiddleCharts = styled.div`
  padding: 0rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3.2rem;
`;

export const SideHistory = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #F7F7FF;
  width: 28%;
`;