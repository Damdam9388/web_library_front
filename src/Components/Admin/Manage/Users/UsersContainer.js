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
    const [loading] = useState(false);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};
    const columnNames = ['#', 'login', 'email', 'update', 'delete'];
    const userAttributesKey = ['login', 'email'];

    useEffect(() => {
        axios.get(ENDPOINT_ALL_USERS, config)
            .then(response => {
                setUsers(response.data['hydra:member']);
            }, (error) => {
                console.log(error);
            });
    }, [ config ]);

    return (
        <>
            {
                loading ?


                    (
                        <div style={{minHeight:"100vh"}} className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                            <Wave size={100} color={"#00acee"} />
                        </div>

                    ) : (
                        <div style={{height:"100vh"}}>
                            <TitlePage title="Page de gestion des users" />
                            <table className="table">
                                <ColumnNames columnNames={columnNames} />
                                <Item items={users} attributeskey={userAttributesKey} endpoint={ADMIN_UPDATE} isLoading={loading}/>
                            </table>
                        </div>
                    )
            }
        </>
    );
};
export default UsersContainer;