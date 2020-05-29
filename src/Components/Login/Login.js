import React, {useContext} from "react";
import LoginForm from "./LoginForm";
import axios from "axios";
import AuthContext from "../Context/AuthContext";
import History from "../Utils/History";
import UserContext from "../Context/UserContext";
import {ENDPOINT_LOGIN} from "../../UrlConstants"
import { Box } from "@chakra-ui/core";

const Login = (props) => {
    const {updateLogged} = useContext(AuthContext);
    const {updateUsername} = useContext(UserContext);

    const axiosData = (e) => {
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        console.log("mail = " + email + " et password = " + password);
        e.preventDefault();
        axios.post(ENDPOINT_LOGIN, {username: email, password: password})
            .then(response => {
                console.log(response);
                const token = response.data.token;
                console.log(token);
                localStorage.setItem("tokenUser", token);
                const userLogin = response.data.login;
                localStorage.setItem("username", userLogin);
                updateUsername(userLogin);
                updateLogged(true);
                History.push('/');
            }, (error) => {
                console.log(error);
                localStorage.removeItem("tokenUser");
            });
    };

    return (
    <>
        <div className="row contain" style={{height:'50vh'}}>
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                <Box bg="tomato" w="25%" p={4} color="white">
                    <div className="logo mb-3">
                        <div className="col-md-12 text-center">
                            <h1 className="login_title text-white">Login</h1>
                        </div>
                    </div>
                    <LoginForm getLogin={axiosData}/>
                </Box>
            </div>
        </div>
    </>
    );
};
export default Login;