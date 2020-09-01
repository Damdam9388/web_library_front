import React, { useEffect, useState} from 'react';
import axios from "axios";
import {ENDPOINT_ADD_RESOURCE} from "../../../../Constants/UrlConstants";
import ResourceTable from "./ResourceTable";

const ResourcesContainer = () => {

    const [resources, setResources] = useState([]);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};

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
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                <h2 className="my-5">Page de gestion des resources</h2>
            </div>

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">url</th>
                    <th scope="col">author</th>
                    <th scope="col">language</th>
                    <th scope="col">level</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                    <th scope="col">publisher</th>
                </tr>
                </thead>
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