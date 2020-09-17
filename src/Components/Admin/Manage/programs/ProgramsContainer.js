import React, { useEffect, useState} from 'react';
import axiosInstance from "../../../../AxiosInstance";
import {ENDPOINT_TOPIC_PROGRAMMING} from "../../../../Constants/UrlConstants";
import {ADMIN_UPDATE_PROGRAM} from "../../../../Constants/constants";
import ColumnNames from "../../AdminLayout/ColumnNames";
import TitlePage from "../../AdminLayout/TitlePage";
import Item from "../Item";
import WaveLoader from "../../../Utils/WaveLoader";
import ConnectedUserNav from "../../../../Layout/Nav/ConnectedUserNav";
import {Link} from 'react-router-dom';
import * as CONSTANTS from "../../../../Constants/constants";

const ProgramsContainer = () => {
    const [programs, setPrograms] = useState([]);
    const columnNames = ['#', 'programName', 'Update', 'delete'];
    const userAttributesKey = ['programName'];
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        axiosInstance.get(ENDPOINT_TOPIC_PROGRAMMING)
            .then(response => {
                console.log(response);
                setPrograms(response.data['hydra:member']);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <>
            <ConnectedUserNav />
            <Link to={CONSTANTS.ADD_PROGRAM_FORM} className="btn btn-primary float-right mt-5">Add new Program</Link>
            {isLoading ?
                <WaveLoader />
                :
                <div style={{height:"150vh"}}>
                    <TitlePage title="Page de gestion des programs" />
                        <table className="table">

                            <ColumnNames columnNames={columnNames}/>
                            <Item items={programs} attributeskey={userAttributesKey} endpoint={ADMIN_UPDATE_PROGRAM} endpointDelete={ENDPOINT_TOPIC_PROGRAMMING}/>

                        </table>
                </div>
            }
        </>
    );
};
export default ProgramsContainer;