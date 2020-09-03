import React, { useState } from "react";
import { Stack } from "@chakra-ui/core";
import ButtonSubmit from "../Utils/ButtonSubmit";
import InputFormControl from "../Utils/Form/InputFormControl";
import EmailField from "../Login/EmailField";
import PasswordField from "../Login/PasswordField";

const SignUpForm = ({ getSignUp, isLoading }) => {
  //cf chakra ui
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [title] = useState("Sign up");

  return (
    <div className="form">
      <form onSubmit={getSignUp}>
        <Stack spacing={5}>
          <InputFormControl
            id="username"
            name="username"
            label="UserName"
            placeholder="Enter your user Name..."
            iconName="arrow-right"
          />

          <EmailField />
          <PasswordField show={show} handleRightBtnClick={handleClick}/> 

          <ButtonSubmit title={title} load={isLoading}/>

        </Stack>
      </form>
    </div>
  );
};

export default SignUpForm;
