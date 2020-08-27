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
    //on implémente les trois contexts
    const {updateLogged} = useContext(AuthContext);
    const {updateUsername} = useContext(UserContext);
    const {updateRole} = useContext(RoleContext);
    //on implémente un state loading pour mettre en place le loader
    // tant que les données de la requête ne son pas chargées, loading = true
    // Une fois les données chargées, loading = false
    const [loading, setLoading] = useState(false);

    //variable pour implémenter la redirection via react-router-dom
    let history = useHistory();

    //méthode qui s'occupe de la requête de login a envoyer au back-end
    const axiosLogin = (e) => {
        //on initialise loading à true
        setLoading(true);
        //on recupere les données contenues dans le formulaire de login react à l'aide de 'e.target.elements.[name de l'input].value'
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        //on stoppe la propagation de l'event afin qu'il se borne à l'action qu'on lui demande
        e.preventDefault();
        //on fait appel à la méthode getLogin qui fait une requête POST avec Axios sur la route : https://localhost:8000/login_check
        //si la requête renvoie une authentication successfully alors on doit recevoir un JWT token et le login et le role de l'utilisateur connecté
        getLogin(email, password)
            //si la requête réussie, on fait les actions ci-dessous
            .then((response) => {
                console.log(response);
                //on récupère le JWT token et on le place dans le localStorage sous la variable tokenUser
                const token = response.data.token;
                console.log(token);
                localStorage.setItem("tokenUser", token);
                //on récupère le login et on le place dans le localStorage sous la variable userLogin
                const userLogin = response.data.data.login;
                localStorage.setItem("userLogin", userLogin);
                //on récupère le role et on le place dans le localStorage sous la variable userRole
                localStorage.setItem("userRole", response.data.data.roles[0]);
                //on initialise les valeurs des contexts avec les données reçues
                //le roleContext prend la valeur du role contenu dans la response
                updateRole(response.data.data.roles[0]);
                //le UserContext prend la valeur du login contenu dans la response
                updateUsername(userLogin);
                //le authContext prend la valeur true
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
            //finalement, tout est chargé donc on remet loading à false
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