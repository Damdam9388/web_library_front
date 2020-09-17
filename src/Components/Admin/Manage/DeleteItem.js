import React from 'react';
import {useHistory} from "react-router-dom";
import axiosInstance from "../../../AxiosInstance";

const DeleteItem = ({item}) => {

    let history = useHistory();

    const deleteThisItem = async() => {
        await axiosInstance().delete(`${item['@id']}`);
        await history.go(0);
    };


    return (
        <div>
            <button className="btn btn-outline-danger" onClick={deleteThisItem}>Delete</button>
        </div>
    );
};

export default DeleteItem;