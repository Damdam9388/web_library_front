import React from 'react';
import {useHistory} from "react-router-dom";
import Axios from "axios";

const DeleteItem = ({item, endpoint}) => {

    let history = useHistory();
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};

    const deleteThisItem = async() => {
        await Axios.delete(`${endpoint}/`+item.id, config);
        await history.go(0);
    };

    return (
        <div>
            <button className="btn btn-outline-danger" onClick={deleteThisItem}>delete</button>
        </div>
    );
};

export default DeleteItem;