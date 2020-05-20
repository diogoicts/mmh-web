import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import { Container } from "./styles";
import manaus_logo from "../../assets/img_logo_manaus.png";

import api from "../../services/api";


const style = {
  fontSize: 20
};

const ResetPassword = () => {
  const [values, setValues] = React.useState({
    email: "",
    error: ""
  });

  function handleError(error) {
    console.log(error);
    if (error.status === 422) {
      setValues({ ...values, error: error.data.errors[0] });
    }
    if (error.status === 401) {
      setValues({ ...values, error: error.data.message });
    }
  }

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  async function handleResetPassword(e) {
    e.preventDefault();
    const { email } = values;
    if (!email) {
      setValues({
        ...values,
        error: "Preencha e-mail e senha para continuar!"
      });
    } else {
      try {
        const response = await api.post("/auth/password-reset", { email });
        console.log(response);
      } catch (error) {
        handleError(error.response);
      }
    }
  }

  return (
    <Container>
         <img
          src={manaus_logo}
          className="logo_manaus"
          alt="Manaus mais Humana"
        />

      <h1>Esqueci minha senha</h1>

      <p>
        Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe
        enviaremos um link com as instruções.
      </p>

      <form>
        <FormControl>
          <InputLabel htmlFor="login" style={style}>
            Digite seu e-mail
          </InputLabel>
          <Input
            placeholder="Ex: nome@exemplo.com"
            value={values.email}
            onChange={handleChange("email")}
            style={style}
            id="login"
            type="email"
          />
        </FormControl>
        <Button
          type="submit"
          className="button"
          variant="contained"
          color="primary"
          onClick={handleResetPassword}
        >
          Enviar
        </Button>
      </form>
    </Container>
  );
};

export default ResetPassword;
