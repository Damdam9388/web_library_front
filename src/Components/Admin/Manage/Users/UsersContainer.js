import React, {useState, useEffect} from 'react';
import axiosInstance from "../../../../AxiosInstance";
import ColumnNames from "../../AdminLayout/ColumnNames";
import {ENDPOINT_ALL_USERS} from "../../../../Constants/UrlConstants";
import {ADMIN_UPDATE} from "../../../../Constants/constants";
import Item from "../Item";
import WaveLoader from "../../../Utils/WaveLoader";
import TitlePage from "../../AdminLayout/TitlePage";
import ConnectedUserNav from "../../../../Layout/Nav/ConnectedUserNav";


const UsersContainer = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const columnNames = ['#', 'login', 'email', 'update', 'delete'];
    const userAttributesKey = ['login', 'email'];

    useEffect(() => {
        setIsLoading(true);
        axiosInstance.get(ENDPOINT_ALL_USERS)
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
            <ConnectedUserNav />
            {
                isLoading ?
                    <WaveLoader />

                    :
                        <div style={{height:"100vh"}}>
                            <TitlePage title="Page de gestion des users" />
                            <table className="table">
                                <ColumnNames columnNames={columnNames} />
                                <Item items={users} attributeskey={userAttributesKey} endpoint={ADMIN_UPDATE} endpointDelete={ENDPOINT_ALL_USERS}/>
                            </table>
                        </div>
            }
        </>
    );
};
export default UsersContainer;