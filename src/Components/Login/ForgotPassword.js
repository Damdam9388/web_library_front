import React from "react";
import {userForgotPassword} from "../../Services/AuthenticationServices";
import ButtonSubmit from "../Utils/ButtonSubmit";
import EmailField from "./EmailField";

//composant du formulaire de mot de passe oublié pour demander une reinitialisation du mot de passe au back-end
const ForgotPassword = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        userForgotPassword(email)
            .then(response => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return(
        <div className="row" style={{height: "100vh"}}>
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                <div className="jumbotron" style={{width:"70%"}} >
                    <form onSubmit={sendEmail}>
                        <EmailField />
            
                        <div className="col-md-12 text-center mt-lg-5">
                            <ButtonSubmit title="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;