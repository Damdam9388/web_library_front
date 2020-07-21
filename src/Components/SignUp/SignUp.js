import React, { useContext, useState } from "react";
import SignUpForm from "./SignUpForm";
import AuthContext from "../Context/AuthContext";
import { useHistory } from "react-router-dom";
import { Box } from "@chakra-ui/core";
import "./SignUpForm.scss";
import { getSignUp } from "../../Services/AuthenticationServices";

const SignUp = (props) => {
  const [user, setUser] = useState([]);
  const { userHasSigned } = useContext(AuthContext);
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
      <div className="wrap" style={{ height: '100vh' }}>
        <div className="form">
          <div className="row contain">
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
              <Box bg="tomato" w="25%" p={4} color="white">
                <div className="logo mb-3">
                  <div className="col-md-12 text-center">
                    <h1 className="login_title text-white">SignUp</h1>
                  </div>
                </div>
                <SignUpForm getSignUp={axiosSignUp} isLoading={isLoading} />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;