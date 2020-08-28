import React, {useContext, useState} from "react";
import LoginForm from "./LoginForm";
import AuthContext from "../Context/AuthContext";
import { useHistory } from 'react-router-dom';
import UserContext from "../Context/UserContext";
import { Box } from "@chakra-ui/core";
import './login.scss';
import './LoginForm.scss';
import {getLogin} from "../../Services/AuthenticationServices";
import backgroundImage from './../../Images/background2.jpg';
import * as CONSTANTS from "../../Constants/constants";
import RoleContext from "../Context/RoleContext";

const Login = (props) => {
    const {updateLogged} = useContext(AuthContext);
    const {updateUsername} = useContext(UserContext);
    const {updateRole} = useContext(RoleContext);
    const [loading, setLoading] = useState(false);
    let history = useHistory();

    const axiosLogin = (e) => {
        setLoading(true);
        //on recupere les données contenues dans le formulaire de login
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        e.preventDefault();


        getLogin(email, password)
            .then((response) => {
                console.log(response);

                //on récupère le JWT token et on le place dans le localStorage sous la variable tokenUser
                const token = response.data.token;
                console.log(token);
                localStorage.setItem("tokenUser", token);

                const userLogin = response.data.data.login;
                localStorage.setItem("userLogin", userLogin);

                localStorage.setItem("userRole", response.data.data.roles[0]);

                //on initialise les valeurs des contexts avec les données reçues
                updateRole(response.data.data.roles[0]);
                updateUsername(userLogin);
                updateLogged(true);
                
                //selon le role(ADMIN ou USER) on redirige vers la bonne page d'accueil
                history.push(response.data.data.roles[0] === 'ROLE_ADMIN' ? CONSTANTS.ADMIN_DASHBOARD : CONSTANTS.CONNECTED_USER);
            })
            //si l'authentication echoue, le serveur back-end renvoit une erreur et on enlève les données contenues dans le localStorage
            .catch((error) => {
                console.log(error);
                localStorage.removeItem("tokenUser");
                localStorage.removeItem("userLogin");
                localStorage.removeItem("userRole");
            })
            .finally(() => setLoading(false));
    };

    return (
    <div className="row" style={{height:"100vh", backgroundImage:`url(${backgroundImage})`}}>
        <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                <Box bg="#F7FAFC" opacity="0.9" w="45%" p={4} mb={5} rounded="md" className="align-self-center">
                    <div className="col-md-12 text-center">
                        <h1 className="login_title text-dark font-weight-bold mb-5" style={{fontSize:"35px", fontWeight:"600"}}>LOGIN</h1>
                    </div>
                    {/*composant qui envoie vers le formulaire de login et on lui passe la méthode axiosLogin et la valeur de loading*/}
                    <LoginForm getLogin={axiosLogin} load={loading}/>
                </Box>
        </div>
    </div>
    );
};
export default Login;