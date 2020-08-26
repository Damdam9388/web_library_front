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