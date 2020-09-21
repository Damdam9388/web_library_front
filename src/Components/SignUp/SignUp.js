import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import {Link, useHistory} from "react-router-dom";
import { Box } from "@chakra-ui/core";
import "./SignUpForm.scss";
import {getSignUp} from "../../Services/AuthenticationServices";
import backgroundImage from './../../Images/background2.jpg';
import * as CONSTANTS from "../../Constants/constants";

const SignUp = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();
  const [alertMessage, setAlertMessage] = useState({message:"", level:""});
  const [showAlert , setShowAlert] = useState(false);

  const axiosSignUp = (e) => {
    setIsLoading(true);
    const userName = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    console.log("username = " + userName + "mail = " + email + " password = " + password);
    e.preventDefault();
    getSignUp(userName, email, password)
      .then((res) => {
        setAlertMessage({message: "Your account has been created, check your email to activate it", level: "alert alert-success"});
        console.log(res);

      })
      .catch((error) => {
        setAlertMessage({message: "Error during creation of your account", level: "alert alert-danger"});
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
        setShowAlert(true);
        setTimeout(() => {
          history.push("/");
        }, 5000);
      });
  };


  return (
    <>
      <div>
        <div className="row contain" style={{ height: '100vh', backgroundImage:`url(${backgroundImage})`}}>
          {showAlert ?
              <div className="col-md-12 text-center">
                <div className={alertMessage.level} role="alert">
                  {alertMessage.message}
                </div>
              </div>

              :
              <div/>
          }
          <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
            <Box bg="#F7FAFC" opacity="0.9" width={["100%",1 / 2, 1 / 3]} p={4} mb={5} rounded="md" className="align-self-center">
              <div className="logo mb-3">
                <div className="col-md-12 text-center">
                  <Link className="float-left d-block text-black-50 font-weight-lighter" to={CONSTANTS.LANDINGPAGE}>go back to the landing page</Link>
                  <br/>
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