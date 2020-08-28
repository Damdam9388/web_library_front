import React from 'react';
import {useHistory} from "react-router-dom";
import Axios from "axios";
import {ENDPOINT_PROGRAMS} from "../../../../Constants/UrlConstants";

const DeleteProgram = ({program}) => {
    let history = useHistory();
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};

    const deleteThisProgram = async() => {
        await Axios.delete(`${ENDPOINT_PROGRAMS}/`+program.id, config);
        await history.go(0);
    };
    return (
        <div>
            <button className="btn btn-outline-danger" onClick={deleteThisProgram}>delete</button>
        </div>
    );
};

export default DeleteProgram;