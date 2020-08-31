import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import Axios from "axios";
import {URL_API} from "../../../../Constants/UrlConstants";
import ConnectedUserNav from "../../../../Layout/Nav/ConnectedUserNav";
import {Box, Input, InputGroup, InputLeftElement, Stack} from "@chakra-ui/core";
import FormControl from "@chakra-ui/core/dist/FormControl";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import UserContext from "../../../Context/UserContext";
import ButtonSubmitDefault from "../../../Utils/ButtonSubmitDefault";
import {ADMIN_PROGRAMS} from "../../../../Constants/constants";

const UpdateProgramForm = ({match}) => {

    const {username} = useContext(UserContext);
    const [title] = useState("Send");
    let history = useHistory();
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token, 'Content-type': 'application/json'}};

    useEffect(() => {
        console.log(match.params.id);
    })

    const updateThisProgram = (e) => {
        e.preventDefault();
        Axios.put(`${URL_API}` + match.params.id, {name:e.target.elements.programName.value}, config)
            .then(history.push(ADMIN_PROGRAMS));
    };

    return (
        <div style={{height:"150vh"}}>

            <ConnectedUserNav username={username} />
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                <Box w="80%" p={4} mb={5} className="align-self-center">
                    <div className="form" style={{height:"140vh"}}>
                        <h2 className="text-uppercase" style={{color:"#d83a3a"}}>Update Program</h2>
                        <form onSubmit={updateThisProgram}>
                            <Stack spacing={4}>

                                <FormControl isRequired>
                                    <FormLabel htmlFor="id">Id</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement />
                                        <Input
                                            variant="outline"
                                            type="text"
                                            name="id"
                                            id="id"
                                            className="form-control"
                                            placeholder={match.params.id}
                                            isDisabled={true}
                                        />
                                    </InputGroup>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel htmlFor="programName">programName</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement />
                                        <Input
                                            variant="outline"
                                            type="text"
                                            name="programName"
                                            id="programName"
                                            className="form-control"
                                            placeholder={match.params.programName}
                                        />
                                    </InputGroup>
                                </FormControl>


                                <ButtonSubmitDefault title={title} />

                            </Stack>
                        </form>
                    </div>
                </Box>
            </div>
        </div>
    );
};

export default UpdateProgramForm;