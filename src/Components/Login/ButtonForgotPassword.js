import { Button } from "@chakra-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import * as CONSTANTS from "../../Constants/constants";

const ButtonForgotPassword = () => (
  <div className="row mb-5 mt-3">
    <div className="col-md-12 d-flex flex-column justify-content-end align-items-md-end">
      <Button
        color="dark"
        bg="#4a9bd1"
        borderColor="#4a9bd1"
        size="sm"
        _hover={{ bg: "#78a6c5", borderColor: "#78a6c5" }}
      >
        <Link className="text-white" to={CONSTANTS.FORGOT_PASSWORD}>
          Forgot your password
        </Link>
      </Button>
    </div>
  </div>
);

export default ButtonForgotPassword;
