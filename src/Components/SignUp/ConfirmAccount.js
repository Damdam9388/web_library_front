import React, {useEffect, useState} from "react";
import {getConfirmAccount} from "../../Services/AuthenticationServices";
import { useHistory } from 'react-router-dom';
import * as CONSTANTS from "../../Constants/constants";

const ConfirmAccount = ({match}) => {
    const [loading, setLoading] = useState(true);
    let history = useHistory();

    useEffect(() => {
        const token = match.params.token;
        getConfirmAccount(token)
            .then((res) => {
                console.log(res);
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
                        <p>Patientez pendant la création de votre compte</p>
                        <p>Vous allez être redirigé sur la page de Login</p>
                    </div>
                </div>
            </div> :
                <div> </div>
        }
        </>
    );
};
export default ConfirmAccount;