import React, {useEffect, useState} from "react";
import {getConfirmAccount} from "../../Services/AuthenticationServices";
import { useHistory } from 'react-router-dom';
import * as CONSTANTS from "../../Constants/constants";

//composant pour activer le compte utilisateur suite à son inscription
const ConfirmAccount = ({match}) => {
    const [loading, setLoading] = useState(true);
    let history = useHistory();

    useEffect(() => {
        //le user doit recevoir un mail de la part du back
        //ce mail contient un lien qui envoit vers cette et contient un token qui va etre renvoyé au back-end
        //afin d'authentifier le user donc sécurité
        const token = match.params.token;
        //méthode PUT qui envoie sur la route /confirm-user/{token} du back-end et donc à la méthode confirmUser du AccountActivatorController
        getConfirmAccount(token)
            .then((res) => {
                console.log(res);
                //on renvoie le user à la page de login afin qu'il s'authentifie une fois le compte activé
                history.push(CONSTANTS.LOGIN);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [history, match.params.token]);
    return (
        <>
        { loading ?
            <div className="row" style={{height: "100vh"}}>
                <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                    <div className="jumbotron" style={{width:"70%"}} >
                        <p>Please be patient</p>
                        <p>You will be redirected to the login page</p>
                    </div>
                </div>
            </div> :
                <div> </div>
        }
        </>
    );
};
export default ConfirmAccount;