import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {ENDPOINT_PROGRAMS} from "../../../../Constants/UrlConstants";
import ProgramTable from "./ProgramTable";

const ProgramsContainer = () => {
    const [programs, setPrograms] = useState([]);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};

    useEffect(() => {
        axios.get(ENDPOINT_PROGRAMS, config)
            .then(response => {
                console.log(response);
                setPrograms(response.data['hydra:member']);
            }, (error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                <h2 className="my-5">Page de gestion des programmes</h2>
            </div>

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    programs ? programs.map(program => <ProgramTable key={program['@id']} program={program} />) : <div></div>
                }
                </tbody>

            </table>

        </div>
    );
};
export default ProgramsContainer;