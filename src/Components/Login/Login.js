import React, {useContext, useState} from "react";
import LoginForm from "./LoginForm";
import AuthContext from "../Context/AuthContext";
import { useHistory } from 'react-router-dom';
import UserContext from "../Context/UserContext";
import { Box } from "@chakra-ui/core";
import './LoginForm.scss';
import Nav from '../../Layout/Nav/Nav.js';
import {getLogin} from "../../Services/AuthenticationServices";

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
                history.push('/');
            })
            .catch((error) => {
                console.log(error);
                localStorage.removeItem("tokenUser");
            })
            .finally(() => setLoading(false));
    };

    return (
    <>

    <Nav />
    <div className="form"> 
        <div className="row contain" style={{height:'50vh'}}>
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                <Box bg="#263246" w="25%" p={4} color="#d83a3a">
                    <div className="logo mb-3">
                        <div className="col-md-12 text-center">
                            <h1 className="login_title text-white" style={{fontSize:"35px", fontWeight:"600"}}>Sign In</h1>
                        </div>
                    </div>
                    <LoginForm getLogin={axiosLogin} load={loading}/>
                </Box>
            </div>
        </div>
        </div> 
    </>
    );
};
export default Login;