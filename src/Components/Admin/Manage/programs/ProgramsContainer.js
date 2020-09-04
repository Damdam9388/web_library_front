import React, { useEffect, useState} from 'react';
import axiosInstance from "../../../../AxiosInstance";
import {ENDPOINT_PROGRAMS} from "../../../../Constants/UrlConstants";
import {ADMIN_UPDATE_PROGRAM} from "../../../../Constants/constants";
import ColumnNames from "../../AdminLayout/ColumnNames";
import TitlePage from "../../AdminLayout/TitlePage";
import Item from "../Item";
import WaveLoader from "../../../Utils/WaveLoader";

const ProgramsContainer = () => {
    const [programs, setPrograms] = useState([]);
    const columnNames = ['#', 'programName', 'Update', 'delete']
    const userAttributesKey = ['programName'];
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        axiosInstance.get(ENDPOINT_PROGRAMS)
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
            {isLoading ?
                <WaveLoader />
                :
                <div style={{height:"100vh"}}>
                    <TitlePage title="Page de gestion des programs" />
                        <table className="table">

                            <ColumnNames columnNames={columnNames}/>
                            <Item items={programs} attributeskey={userAttributesKey} endpoint={ADMIN_UPDATE_PROGRAM}/>

                        </table>
                </div>
            }
        </>
    );
};
export default ProgramsContainer;