import React, { useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import axiosInstance from "../../../../AxiosInstance";
import {URL_API} from "../../../../Constants/UrlConstants";
import ConnectedUserNav from "../../../../Layout/Nav/ConnectedUserNav";
import {Box, Stack} from "@chakra-ui/core";
import ButtonSubmit from "../../../Utils/ButtonSubmit";
import {ADMIN_PROGRAMS} from "../../../../Constants/constants";
import {Wave} from "better-react-spinkit";
import IdField from "../../AdminLayout/IdField";
import NameField from "../../AdminLayout/NameField";
import * as CONSTANTS from "../../../../Constants/constants";

const UpdateProgramForm = ({match}) => {

    const [program, setProgram] = useState();
    let history = useHistory();

    useEffect(() => {
        axiosInstance().get(`${URL_API}${match.params.id}`)
            .then(response => {
                setProgram(response.data);
            })
            .catch(error => console.log(error));
    })

    const updateThisProgram = (e) => {
        e.preventDefault();
        axiosInstance().put(`${URL_API}` + match.params.id, {programmingLanguage:{name:e.target.elements.name.value}})
            .then(history.push(ADMIN_PROGRAMS));
    };

    return (
        <div style={{height:"150vh"}}>

            <ConnectedUserNav />
            <div className="col-md-12">
                <Link
                    className="btn btn-primary my-2 border-0 mx-5"
                    style={{background:"linear-gradient(to right, #457fca, #5691c8)"}}
                    to={`${CONSTANTS.ADMIN_PROGRAMS}`}>
                    Back to manage programs
                </Link>
            </div>
            {
                program ?
                    <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                        <Box w="80%" p={4} mb={5} className="align-self-center">
                            <div className="form" style={{height:"140vh"}}>
                                <h2 className="text-uppercase" style={{color:"#d83a3a"}}>Update Program</h2>
                                <form onSubmit={updateThisProgram}>
                                    <Stack spacing={4}>

                                        <IdField item={program} />

                                        <NameField item={program} attribute='programName'/>

                                        <ButtonSubmit title="Send" />

                                    </Stack>
                                </form>
                            </div>
                        </Box>
                    </div>
                    :
                    <div style={{minHeight:"100vh"}} className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                        <Wave size={100} color={"#00acee"} />
                    </div>
            }
        </div>
    );
};

export default UpdateProgramForm;