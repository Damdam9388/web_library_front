import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import Axios from "axios";
import {ENDPOINT_ALL_USERS} from "../../../../Constants/UrlConstants";
import ConnectedUserNav from "../../../../Layout/Nav/ConnectedUserNav";
import {Box, Button, Input, InputGroup, InputLeftElement, Stack} from "@chakra-ui/core";
import FormControl from "@chakra-ui/core/dist/FormControl";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import UserContext from "../../../Context/UserContext";
import ButtonSubmitDefault from "../../../Utils/ButtonSubmitDefault";
import {ADMIN_USERS} from "../../../../Constants/constants";

const UpdateUserForm = ({match}) => {

    const {username} = useContext(UserContext);
    const [title, setTitle] = useState("Send");
    const [data, setData] = useState(null);
    let history = useHistory();
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};

useEffect(() => {
    console.log(match.params.id);
})

    const updateThisUser = (e) => {
        setData({
        login:e.target.elements.login.value
        });
        e.preventDefault();
    };

    useEffect(() => {
            Axios.put(`${ENDPOINT_ALL_USERS}/` + match.params.id, data, config)
                .then(history.push(ADMIN_USERS));

    }, [data])

    return (
        <div style={{height:"150vh"}}>

            <ConnectedUserNav username={username} />
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                <Box w="80%" p={4} mb={5} className="align-self-center">
                    <div className="form" style={{height:"140vh"}}>
                        <h2 className="text-uppercase" style={{color:"#d83a3a"}}>Update User</h2>
                        <form onSubmit={updateThisUser}>
                            <Stack spacing={4}>

                                <FormControl isRequired>
                                    <FormLabel htmlFor="id">Id</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement />
                                        <Input
                                            variant="outline"
                                            type="text"
                                            name="login"
                                            id="login"
                                            className="form-control"
                                            placeholder={match.params.id}
                                            isDisabled={true}
                                        />
                                    </InputGroup>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel htmlFor="login">Login</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement />
                                        <Input
                                            variant="outline"
                                            type="text"
                                            name="login"
                                            id="login"
                                            className="form-control"
                                            placeholder={match.params.login}
                                        />
                                    </InputGroup>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement/>
                                        <Input
                                            variant="outline"
                                            type="text"
                                            name="email"
                                            id="email"
                                            className="form-control"
                                            placeholder={match.params.email}
                                            isDisabled={true}
                                        />
                                    </InputGroup>
                                </FormControl>

                                <ButtonSubmitDefault title={title}/>

                            </Stack>
                        </form>
                    </div>
                </Box>
            </div>
        </div>
    );
};
export default UpdateUserForm;