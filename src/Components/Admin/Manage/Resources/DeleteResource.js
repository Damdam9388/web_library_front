import React from 'react';
import {useHistory} from "react-router-dom";
import Axios from "axios";
import {ENDPOINT_ADD_RESOURCE} from "../../../../Constants/UrlConstants";

const DeleteResource = ({resource}) => {

    let history = useHistory();
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};

    const deleteThisResource = async() => {
        await Axios.delete(`${ENDPOINT_ADD_RESOURCE}/`+resource.id, config);
        await history.go(0);
    };

    return (
        <div>
            <button className="btn btn-outline-danger" onClick={deleteThisResource}>delete</button>
        </div>
    );
};

export default DeleteResource;