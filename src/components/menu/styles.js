import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3857A3;
`;

export const MenuHeader = styled.div`
  height: 5rem
  width: 100%;
  color: #fff;
  margin: 2.57rem 0rem 7.7rem 0rem;

  img {
    height: 5rem;
    width: 8.1rem;
  }
`;

export const MenuButtons = styled.div`

  .item {
    div {
      width: 6.2rem;
      height: 6.2rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 4.3rem;
      background-color: #0D2662;
      opacity: 0.3;
      transition: opacity 0.3s;

      img {
        width: 4rem;
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  .active {
    div {
      opacity: 1;
    }
  }
  
`;

export const MenuFooter = styled.div`
  margin-top: auto;

  div {
    width: 6.2rem;
    height: 6.2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.5rem;
    background-color: #0D2662;
    opacity: 0.3;
    transition: opacity 0.3s;
    cursor: pointer;

    img {
      width: 4rem;
    }

    &:hover {
      opacity: 1;
    }
  }
`;