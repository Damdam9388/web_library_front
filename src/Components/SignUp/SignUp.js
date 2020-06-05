import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import AuthContext from "../Context/AuthContext";
import { ENDPOINT_SIGNUP } from "../../UrlConstants";
import { Box } from "@chakra-ui/core";
import './SignUpForm.scss';

const SignUp = () => {
  const user = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const history = useHistory;
  const [newUser, setNewUser] = useState(null);
  const { userHasAuthenticated } = AuthContext
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return (
      user.userName > 0 &&
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.password === user.confirmPassword
    );
  }

  handleChange(e) {
    const target = e.target;
    console.log(target); 
    let user = Object.assign({}, user, { [target.name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    setIsLoading(true);
    /*const userName = e.target.elements.userName.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.message.value;
    try {
      const res = await Axios.post((ENDPOINT_SIGNUP, user);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  */
  setNewUser("test");

  setIsLoading(false);

}

return (
  <>
    <div className="form">
      <div className="row contain" style={{ height: '50vh' }}>
        <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
          <Box bg="tomato" w="25%" p={4} color="white">
            <div className="logo mb-3">
              <div className="col-md-12 text-center">
                <h1 className="login_title text-white">SignUp</h1>
              </div>
            </div>
            <SignUpForm onSubmit={handleSubmit} isLoading={isLoading} disabled={validateForm} />
          </Box>
        </div>
      </div>
    </div>
  </>
);
};
export default SignUp;