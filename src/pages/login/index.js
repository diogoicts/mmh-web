import React, { useState } from "react";
import { Link } from 'react-router-dom';


import { Container, SectionForm, Banner } from "./styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

import manaus_logo from "../../assets/img_logo_manaus.png";
import img_card from "../../assets/img_login.png";



import api from "../../services/api";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    // margin: theme.spacing(1)'
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: "100%"
  }
}));

const Login = () => {
  const classes = useStyles();
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
      <SectionForm>
      <img src={manaus_logo} alt="Manaus mais Humana" />
        <form>
   
          <h1>Acesse sua conta</h1>
         
          <TextField
            id="standard-search"
            label="Digite seu e-mail"
            type="email"
            placeholder="Ex: nome@exemplo.com"
            className="input"
          />
         <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor="standard-adornment-password">
              Digite sua senha
            </InputLabel>
            <Input
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
          <Button className="button" variant="contained" color="primary">
            Entrar
          </Button>
        </form>
      </SectionForm>
      
      <Banner>
         <img src={img_card} alt="Banner" className="banner" />
      </Banner>
    </Container>
  );
};

export default Login;
