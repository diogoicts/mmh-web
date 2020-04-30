import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container, SectionForm, Banner, LoginUser } from "./styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";

import manaus_logo from "../../assets/img_logo_manaus.png";
import img_card from "../../assets/img_login.png";

import api from "../../services/api";

const style = {
  fontSize: 20
};

const Login = () => {     
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  async function chama() {
    try {
      const response = await api.get("api/test-cors");
      alert(`${response.data}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <LoginUser>
        <img
          src={manaus_logo}
          className="logo_manaus"
          alt="Manaus mais Humana"
        />
        <form>
          <h1>Acesse sua conta</h1>

           <FormControl>
            <InputLabel htmlFor="login" style={style}>
            Digite seu e-mail
            </InputLabel>
            <Input  placeholder="Ex: nome@exemplo.com" style={style} id="login" type="email" />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="standard-adornment-password" style={style}>
              Digite sua senha
            </InputLabel>
            <Input
              style={style}
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Link className="forpass" to="/forgot_password">
              Esqueci minha senha
            </Link>
          </FormControl>

          <Link to="/dashboard">
            <Button className="button" variant="contained" color="primary">
              Entrar
            </Button>
          </Link>
        </form>
      </LoginUser>
      <Banner>
        <img src={img_card} alt="Banner" className="banner" />
      </Banner>
    </Container>
  );
};

export default Login;
