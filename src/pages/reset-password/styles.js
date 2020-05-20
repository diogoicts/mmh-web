import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo_manaus {
    width: 233, 95px;
    height: 142.59px;
  }

  form {
    width: 30%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  p {
    width: 30%;
    text-align: center;
  }

  .button {
    margin-left: 22%;
    width:  50%;
    height: 40px;
    border-radius: 15px;
    font-weight: 700;
    font-size: 18px;
    display: inline-block;
  }

  h1 {
    color: #3857A3;
    margin-bottom: 15px;
    margin-top:10px;
  }

`;