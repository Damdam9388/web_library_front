import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import { useHistory } from "react-router-dom";
import { Box } from "@chakra-ui/core";
import "./SignUpForm.scss";
import {getSignUp} from "../../Services/AuthenticationServices";
import backgroundImage from './../../Images/background2.jpg';

const SignUp = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();

  const axiosSignUp = (e) => {
    setIsLoading(true);
    const userName = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    console.log("username = " + userName + "mail = " + email + " password = " + password);
    e.preventDefault();
    getSignUp(userName, email, password)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };


  return (
    <>
      <div className="form">
        <div className="row contain" style={{ height: '100vh', backgroundImage:`url(${backgroundImage})`}}>
          <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
            <Box bg="#F7FAFC" opacity="0.9" w="45%" p={4} mb={5} rounded="md" className="align-self-center">
              <div className="logo mb-3">
                <div className="col-md-12 text-center">
                  <h1 className="login_title text-dark font-weight-bold mb-5" style={{fontSize:"35px", fontWeight:"600"}}>SIGN UP</h1>
                </div>
              </div>
              {/*composant qui envoie vers le formulaire react d'inscription et on lui passe la méthode axiosSignUp et la valeur de isloading*/}
              <SignUpForm getSignUp={axiosSignUp} isLoading={isLoading} />
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;