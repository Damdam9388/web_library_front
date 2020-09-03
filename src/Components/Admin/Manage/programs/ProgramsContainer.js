import React, { useEffect, useState} from 'react';
import axios from "axios";
import {ENDPOINT_PROGRAMS} from "../../../../Constants/UrlConstants";
import {ADMIN_UPDATE_PROGRAM} from "../../../../Constants/constants";
import ColumnNames from "../../AdminLayout/ColumnNames";
import TitlePage from "../../AdminLayout/TitlePage";
import Item from "../Item";
import {Wave} from "better-react-spinkit";

const ProgramsContainer = () => {
    const [programs, setPrograms] = useState([]);
    const columnNames = ['#', 'programName', 'Update', 'delete']
    const userAttributesKey = ['programName'];
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        const token = localStorage.getItem('tokenUser');
        axios.get(ENDPOINT_PROGRAMS, {headers: {Authorization: "Bearer " + token}})
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
                <div style={{minHeight:"100vh"}} className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                    <Wave size={100} color={"#00acee"} />
                </div>
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