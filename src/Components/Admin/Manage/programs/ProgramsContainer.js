import React, { useEffect, useState} from 'react';
import axios from "axios";
import {ENDPOINT_PROGRAMS} from "../../../../Constants/UrlConstants";
import {ADMIN_UPDATE_PROGRAM} from "../../../../Constants/constants";
import ColumnNames from "../../AdminLayout/ColumnNames";
import TitlePage from "../../AdminLayout/TitlePage";
import Item from "../Item";

const ProgramsContainer = () => {
    const [programs, setPrograms] = useState([]);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};
    const columnNames = ['#', 'programName', 'Update', 'delete']
    const userAttributesKey = ['programName'];

    useEffect(() => {
        axios.get(ENDPOINT_PROGRAMS, config)
            .then(response => {
                console.log(response);
                setPrograms(response.data['hydra:member']);
            }, (error) => {
                console.log(error);
            });
    }, [ config ]);

    return (
        <div>
            <TitlePage title="Page de gestion des programs" />


            <table className="table">

                <ColumnNames columnNames={columnNames}/>
                <Item items={programs} attributeskey={userAttributesKey} endpoint={ADMIN_UPDATE_PROGRAM}/>

            </table>

        </div>
    );
};
export default ProgramsContainer;