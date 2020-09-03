import React, { useState } from "react";
import { Stack } from "@chakra-ui/core";
import ButtonSubmit from "../Utils/ButtonSubmit";
import InputFormControl from "../Utils/Form/InputFormControl";

const SignUpForm = ({ getSignUp, isLoading }) => {
  const [title] = useState("Sign up");

  return (
    <div className="form">
      <form onSubmit={getSignUp}>
        <Stack spacing={3}>
          <InputFormControl
            id="username"
            name="username"
            label="UserName"
            placeholder="Enter your user Name..."
            iconName="arrow-right"
          />

          <InputFormControl
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="Enter email..."
            iconName="email"
            aria-describedby="emailHelp"
          />

          <InputFormControl
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="Enter password..."
            iconName="lock"
            aria-describedby="passswordHelp"
          />

          <ButtonSubmit title={title} load={isLoading}/>

        </Stack>
      </form>
    </div>
  );
};

export default SignUpForm;
