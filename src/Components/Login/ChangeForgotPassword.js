import React, {useState} from "react";
import {useHistory, withRouter} from "react-router-dom";
import {userChangeForgotPassword} from "../../Services/AuthenticationServices";
import ButtonSubmit from "../Utils/ButtonSubmit";
import PasswordField from "./PasswordField";

//ce composant est accessible seulement depuis le lien envoyé en mail au user qui demande une reinitialisation de mot de passe
//il fait suite au composant ForgotPassword
const ChangeForgotPassword = ({match}) => {

    const [loading, setLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState({message:"", level:""});
    const [showAlert , setShowAlert] = useState(false);
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    let history = useHistory();

    const changePassword = (e) => {
        setLoading(true);
        const token = match.params.token;
        const password = e.target.elements.password.value;
        e.preventDefault();
        userChangeForgotPassword(token, password)
            .then((response) => {
                setAlertMessage({message: "Your password has been changed", level: "alert alert-success"});
                console.log(response);
            })
            .catch((error) => {
                setAlertMessage({message: "Impossible to change your password", level: "alert alert-danger"});
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
                setShowAlert(true);
                setTimeout(() => {
                    history.push("/login");
                }, 5000);
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
                    <form onSubmit={changePassword}>
                        <PasswordField show={show} handleRightBtnClick={handleClick} />
            
                        <div className="col-md-12 text-center">
                            <ButtonSubmit title="Submit" load={loading} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default withRouter(ChangeForgotPassword)