import React, { useEffect, useState} from 'react';
import axios from "axios";
import {ENDPOINT_ADD_RESOURCE} from "../../../../Constants/UrlConstants";
import ColumnNames from "../../AdminLayout/ColumnNames";
import TitlePage from "../../AdminLayout/TitlePage";
import {ADMIN_UPDATE_RESOURCE} from "../../../../Constants/constants";
import Item from "../Item";
import WaveLoader from "../../../Utils/WaveLoader";

const ResourcesContainer = () => {

    const [resources, setResources] = useState([]);
    const columnNames = ['#', 'name', 'url', 'author', 'language', 'level',  'publisher', 'Update', 'delete'];
    const userAttributesKey = ['resourceName', 'url', 'author', 'language', 'level',  'publisher'];
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const token = localStorage.getItem('tokenUser');
        axios.get(ENDPOINT_ADD_RESOURCE, {headers: {Authorization: "Bearer " + token}})
            .then(response => {
                console.log(response);
                setResources(response.data['hydra:member']);
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
                    <WaveLoader />

                    :
                    <div style={{height: "100vh"}}>
                        <TitlePage title="Page de gestion des resources"/>

                        <table className="table">
                            <ColumnNames columnNames={columnNames}/>
                            <Item items={resources} attributeskey={userAttributesKey} endpoint={ADMIN_UPDATE_RESOURCE}/>
                        </table>
                    </div>
            }
        </>
    );
};
export default ResourcesContainer;