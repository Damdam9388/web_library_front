import React from "react";
import InputFormControl from "../Utils/Form/InputFormControl";

const EmailField = () => (
  <InputFormControl
    id="email"
    name="email"
    label="Email"
    placeholder="Enter Email..."
    type="email"
    mb="1rem"
    borderTop="none"
    borderLeft="none"
    borderRight="none"
    borderRadius="none"
    borderBottomColor="black"
    bg="transparent"
    aria-describedby="emailHelp"
    _focus={{
      outline: "none",
      bg: "transparent",
      color: "black",
      boxShadow: "none",
    }}
    color="black"
    p="0"
  />
);

export default EmailField;
