import React, { useEffect, useState} from 'react';
import axios from "axios";
import {ENDPOINT_ADD_RESOURCE} from "../../../../Constants/UrlConstants";
import ResourceTable from "./ResourceTable";
import TitlesTable from "../../AdminLayout/TitlesTable";
import TitlePage from "../../AdminLayout/TitlePage";

const ResourcesContainer = () => {

    const [resources, setResources] = useState([]);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};
    const titles = ['#', 'name', 'url', 'author', 'language', 'level',  'publisher', 'Update', 'delete'];

    useEffect(() => {
        axios.get(ENDPOINT_ADD_RESOURCE, config)
            .then(response => {
                console.log(response);
                setResources(response.data['hydra:member']);
            }, (error) => {
                console.log(error);
            });
    }, [ config ]);

    return (
        <div>
            <TitlePage title="Page de gestion des resources"/>

            <table className="table">
                <TitlesTable titles={titles} />
                <tbody>
                {
                    resources ? resources.map(resource => <ResourceTable key={resource['@id']} resource={resource} />) : <div></div>
                }
                </tbody>

            </table>

        </div>
    );
};
export default ResourcesContainer;