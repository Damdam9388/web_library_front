import React, {useState} from "react";
import {withRouter} from "react-router-dom";
import {userChangeForgotPassword} from "../../Services/AuthenticationServices";
import ButtonSubmit from "../Utils/ButtonSubmit";
import PasswordField from "./PasswordField";

//ce composant est accessible seulement depuis le lien envoyé en mail au user qui demande une reinitialisation de mot de passe
//il fait suite au composant ForgotPassword
const ChangeForgotPassword = ({match}) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const changePassword = (e) => {
        const token = match.params.token;
        const password = e.target.elements.password.value;
        e.preventDefault();
        userChangeForgotPassword(token, password)
            .then((response) => {
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
                    <form onSubmit={changePassword}>
                        <PasswordField show={show} handleRightBtnClick={handleClick} />
            
                        <div className="col-md-12 text-center">
                            <ButtonSubmit title="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default withRouter(ChangeForgotPassword)