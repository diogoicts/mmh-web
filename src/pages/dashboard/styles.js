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

  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const MiddleCharts = styled.div`
  padding: 0rem 3rem;
  max-width: 100%;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > div {
    width: 48%;
  }

  @media (max-width: 480px) {
    flex-direction: column;

    > div {
      width: 100%;
    }
  }
  
`;

export const SideHistory = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #F7F7FF;
  width: 28%;

  @media (max-width: 480px) {
    display: none;
  }
`;