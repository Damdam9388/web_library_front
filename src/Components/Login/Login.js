import React, {useContext, useState} from "react";
import LoginForm from "./LoginForm";
import AuthContext from "../Context/AuthContext";
import { useHistory } from 'react-router-dom';
import UserContext from "../Context/UserContext";
import './LoginForm.scss';
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

        <div className="logo_Webster">
        </div>
    <div className="form"> 
        <div className="row contain">
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                <div className="box_login">
                        <div className="col-md-12 text-center">
                            <h1 className="title_login">LOG IN</h1>
                            <p className="welcome_back">WELCOME BACK ON WEBSTER</p>
                        </div>
                    <LoginForm getLogin={axiosLogin} load={loading}/>
                </div>
            </div>
        </div>
        </div> 
    </>
    );
};
export default Login;