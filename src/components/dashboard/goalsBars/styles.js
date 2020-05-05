import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0rem 3rem;
  margin-top: 5.7rem;

  h1 {
    font-size: 3.6rem;
    color: #0D2662;
    font-weight: 600;
    margin-bottom: 3.5rem;
  }
`;

export const Bar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0rem;
  }

  div {
    &:first-child {
      display: flex;
      justify-content: space-between;
      color: #0D2662;
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    &:last-child {
      width: 100%;
      background-color: #F7F7FF;
      height: 1.8rem;
      border-radius: 2rem;

      >div {
        width: ${props => props.width}%;
        background-color: #7AFFB7;
        height: 100%;
        margin-bottom: 0rem;
      }
    }
  }
`;
