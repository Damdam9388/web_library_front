import React, {useContext, useState} from "react";
import LoginForm from "./LoginForm";
import AuthContext from "../Context/AuthContext";
import { useHistory } from 'react-router-dom';
import UserContext from "../Context/UserContext";
import { Box } from "@chakra-ui/core";
import './login.scss';
import './LoginForm.scss';
import {getLogin} from "../../Services/AuthenticationServices";
import backgroundImage from './../../Images/laptop-2557468_1920.jpg';

const Login = (props) => {
    const {updateLogged} = useContext(AuthContext);
    const {updateUsername} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    let history = useHistory();

    const axiosLogin = (e) => {
        setLoading(true);
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        console.log("mail = " + email + " et password = " + password);
        e.preventDefault();
        getLogin(email, password)
            .then((response) => {
                console.log(response);
                const token = response.data.token;
                console.log(token);
                localStorage.setItem("tokenUser", token);
                const userLogin = response.data.data.login;
                localStorage.setItem("userLogin", userLogin);
                updateUsername(userLogin);
                updateLogged(true);
                history.push("/");
            })
            .catch((error) => {
                console.log(error);
                localStorage.removeItem("tokenUser");
            })
            .finally(() => setLoading(false));
    };

    return (
    <div className="row" style={{height:"100vh", backgroundImage:`url(${backgroundImage})`}}>
        <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                <Box bg="#F7FAFC" opacity="0.9" w="45%" p={4} mb={5} rounded="md" className="align-self-center">
                    <div className="col-md-12 text-center">
                        <h1 className="login_title text-dark font-weight-bold mb-5" style={{fontSize:"35px", fontWeight:"600"}}>Sign In</h1>
                    </div>
                    <LoginForm getLogin={axiosLogin} load={loading}/>
                </Box>
        </div>
    </div>
    );
};
export default Login;