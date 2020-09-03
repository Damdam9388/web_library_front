import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ColumnNames from "../../AdminLayout/ColumnNames";
import {ENDPOINT_ALL_USERS} from "../../../../Constants/UrlConstants";
import {ADMIN_UPDATE} from "../../../../Constants/constants";
import Item from "../Item";
import {Wave} from "better-react-spinkit";
import TitlePage from "../../AdminLayout/TitlePage";


const UsersContainer = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const columnNames = ['#', 'login', 'email', 'update', 'delete'];
    const userAttributesKey = ['login', 'email'];

    useEffect(() => {
        setIsLoading(true);
        const token = localStorage.getItem('tokenUser');
        axios.get(ENDPOINT_ALL_USERS, {headers: {Authorization: "Bearer " + token}})
            .then(response => {
                setUsers(response.data['hydra:member']);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <>
            {
                isLoading ?
                    <div style={{minHeight:"100vh"}} className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                        <Wave size={100} color={"#00acee"} />
                    </div>

                     :
                        <div style={{height:"100vh"}}>
                            <TitlePage title="Page de gestion des users" />
                            <table className="table">
                                <ColumnNames columnNames={columnNames} />
                                <Item items={users} attributeskey={userAttributesKey} endpoint={ADMIN_UPDATE} isLoading={isLoading}/>
                            </table>
                        </div>
            }
        </>
    );
};
export default UsersContainer;