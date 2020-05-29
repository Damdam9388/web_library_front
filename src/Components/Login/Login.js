import React, {useContext} from "react";
import LoginForm from "./LoginForm";
import axios from "axios";
import AuthContext from "../Context/AuthContext";
import History from "../Utils/History";
import * as CONSTANTS from "../../constants";
import UserContext from "../Context/UserContext";
import { Box } from "@chakra-ui/core";

const Login = (props) => {
    const {updateLogged} = useContext(AuthContext);
    const {updateUsername} = useContext(UserContext);

    const axiosData = (e) => {
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        console.log("mail = " + email + " et password = " + password);
        e.preventDefault();
        axios.post(CONSTANTS.LOGIN, {username: email, password: password})
            .then(response => {
                console.log(response);
                const token = response.data.token;
                console.log(token);
                localStorage.setItem("tokenUser", token);
                const userLogin = response.data.data.login;
                localStorage.setItem("userLogin", userLogin);
                updateUsername(userLogin);
                updateLogged(true);
                History.push('/');
            }, (error) => {
                console.log(error);
                localStorage.removeItem("tokenUser");
            });
    };

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div id="first">
                        <Box bg="tomato" w="100%" p={4} color="white">
                            <div className="logo mb-3">
                                <div className="col-md-12 text-center">
                                    <h1 className="login_title text-white">Login</h1>
                                </div>
                            </div>
                            <LoginForm getLogin={axiosData}/>
                        </Box>
                    </div>
                </div>

            </div>
        </div>

    );
};
export default Login;