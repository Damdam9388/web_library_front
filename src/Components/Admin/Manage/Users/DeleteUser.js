import React from 'react';
import {useHistory} from "react-router-dom";
import Axios from "axios";
import {ENDPOINT_ALL_USERS} from "../../../../Constants/UrlConstants";

const DeleteUser = ({user}) => {

    let history = useHistory();
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};

    const deleteThisUser = async() => {
        await Axios.delete(`${ENDPOINT_ALL_USERS}/`+user.id, config);
        await history.go(0);
    };

    return (
        <button className="btn btn-outline-danger" onClick={deleteThisUser}>delete</button>
    );
};
export default DeleteUser;