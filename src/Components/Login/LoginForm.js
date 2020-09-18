import React, { useState } from "react";
import { Stack } from "@chakra-ui/core";
import "./LoginForm.scss";
import ButtonSubmit from "../Utils/ButtonSubmit";
import ButtonForgotPassword from "./ButtonForgotPassword";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";

const LoginForm = ({ getLogin, load }) => {
  //cf chakra ui
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  //pour la refactorisation du bouton submit
  const [title] = useState("Login");

  return (
    <div className="form">
      {/*en fait la méthode axiosLogin qui est derrière*/}
      <form onSubmit={getLogin}>
        <Stack spacing={3}>
          <EmailField />
          <PasswordField show={show} handleRightBtnClick={handleClick} />

          <ButtonForgotPassword />
          <ButtonSubmit title={title} load={load} />
        </Stack>
      </form>
    </div>
  );
};

export default LoginForm;
