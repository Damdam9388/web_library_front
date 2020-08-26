import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TitlesTable from "../../AdminLayout/TitlesTable";
import {ENDPOINT_ALL_USERS} from "../../../../Constants/UrlConstants";
import User from "./User";


const UsersContainer = () => {

    const [users, setUsers] = useState([]);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};

    useEffect(() => {
        axios.get(ENDPOINT_ALL_USERS, config)
            .then(response => {
                setUsers(response.data['hydra:member']);
            }, (error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                <h2 className="my-5">Page de gestion des users</h2>
            </div>

            <table className="table">
                <TitlesTable />
                <tbody>
                {
                    users ? users.map(user => <User key={user['@id']} user={user} />) : <div></div>
                }
                </tbody>

            </table>

        </div>
    );
};
export default UsersContainer;