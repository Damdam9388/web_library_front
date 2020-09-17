import React, {useState} from "react";
import {userForgotPassword} from "../../Services/AuthenticationServices";
import ButtonSubmit from "../Utils/ButtonSubmit";
import EmailField from "./EmailField";
import {Alert} from "bootstrap/js/src";

//composant du formulaire de mot de passe oublié pour demander une reinitialisation du mot de passe au back-end
const ForgotPassword = () => {

    const [loading, setLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState({message:"", level:""});
    const [showAlert , setShowAlert] = useState(false);

    const sendEmail = (e) => {
        setLoading(true);
        e.preventDefault();
        const email = e.target.elements.email.value;
        userForgotPassword(email)
            .then(response => {
                console.log(response);
                if (response.data === "OK"){
                    setAlertMessage({message: "We sent you an email", level: "alert alert-success"});
                } else {
                    setAlertMessage({message: "Your email dosent match", level: "alert alert-danger"});
                }
            })
            .catch((error) => {
                console.log(error);

            })
            .finally(() => {
                setLoading(false);
                setShowAlert(true);
            });
    };

    return(
        <div className="row" style={{height: "100vh"}}>
            {showAlert ?
                <div className="col-md-12 text-center">
                    <div className={alertMessage.level} role="alert">
                        {alertMessage.message}
                    </div>
                </div>

                :
                <div/>
            }
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                <div className="jumbotron" style={{width:"70%"}} >
                    <form onSubmit={sendEmail}>
                        <EmailField />
            
                        <div className="col-md-12 text-center mt-lg-5">
                            <ButtonSubmit title="Submit" load={loading} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;