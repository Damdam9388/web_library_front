import { Button } from "@chakra-ui/core";
import React from "react";
import InputFormControl from "../Utils/Form/InputFormControl";

const PasswordField = ({ show, handleRightBtnClick }) => (
  <InputFormControl
    name="password"
    id="password"
    label="Password"
    placeholder="Enter Password..."
    type={show ? "text" : "password"}
    rightElement={
      <ButtonShowHide show={show} handleClick={handleRightBtnClick} />
    }
    borderTop="none"
    borderLeft="none"
    borderRight="none"
    borderRadius="none"
    bg="transparent"
    borderBottomColor="black"
    aria-describedby="emailHelp"
    p="0"
    color="black"
    _focus={{
      outline: "none",
      bg: "transparent",
      color: "black",
      boxShadow: "none",
    }}
  />
);

const ButtonShowHide = ({ show, handleClick }) => (
  <Button
    className="text-white"
    bg="#4a9bd1"
    borderColor="#4a9bd1"
    h="2.1rem"
    onClick={handleClick}
    _hover={{ bg: "#78a6c5", borderColor: "#78a6c5" }}
  >
    {show ? "Hide" : "Show"}
  </Button>
);

export default PasswordField;
