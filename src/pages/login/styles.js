import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 213,95px;
    height: 122.59px;
  }
`;

export const SectionForm = styled.div`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
  margin-left: 50px;

  form {
    margin-top: 100px;
  }

  h1 {
    font-size: 30px;
    margin-bottom: 32px;
    color:  #3857A3;
  }
  
  .button {
    margin-top: 36px;
    margin-left: 22%;
    width:  50%;
    height: 40px;
    border-radius: 15px;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
  }

  .forpass {
    margin-top: 15px;
    font-size: 12px;
  }

`;

export const Banner = styled.div`
  width:100%;
  /* max-width: 1120px; */
  height: 100vh;
  .banner {
    width: 100%;
    height: 100%;
  }
`