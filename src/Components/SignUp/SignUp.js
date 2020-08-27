import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import { useHistory } from "react-router-dom";
import { Box } from "@chakra-ui/core";
import "./SignUpForm.scss";
import {getSignUp} from "../../Services/AuthenticationServices";
import backgroundImage from './../../Images/background2.jpg';

const SignUp = (props) => {
  //on implémente un state loading pour mettre en place le loader
  // tant que les données de la requête ne son pas chargées, loading = true
  // Une fois les données chargées, loading = false
  const [isLoading, setIsLoading] = useState(false);
  //variable pour implémenter la redirection via react-router-dom
  let history = useHistory();

  //méthode qui s'occupe de la requête de register a envoyer au back-end
  const axiosSignUp = (e) => {
    //on initialise loading à true
    setIsLoading(true);
    //on recupere les données contenues dans le formulaire de login react
    const userName = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    console.log("username = " + userName + "mail = " + email + " password = " + password);
    //on stoppe la propagation de l'event afin qu'il se borne à l'action
    e.preventDefault();
    //on fait appel à la méthode getSignUp qui fait une requête POST avec Axios sur la route : https://localhost:8000/register
    //la requête va a la méthode register du registerController qui s'occupe de créer un nouvel utilisateur
    //et de l'enregistrer en BDD
    getSignUp(userName, email, password)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      })
        //finalement, tout est chargé donc on remet loading à false
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
                <SignUpForm getSignUp={axiosSignUp} isLoading={isLoading} />
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