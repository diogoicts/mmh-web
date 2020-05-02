import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 4rem 0rem 0rem 4rem;
  background-color: #fff;
  
  justify-content: row;  
`;

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 72%;
`;

export const SideHistory = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #F7F7FF;
  width: 28%;
`;