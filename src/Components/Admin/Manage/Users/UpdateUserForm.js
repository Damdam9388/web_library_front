import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import Axios from "axios";
import {URL_API} from "../../../../Constants/UrlConstants";
import ConnectedUserNav from "../../../../Layout/Nav/ConnectedUserNav";
import {Box, Stack} from "@chakra-ui/core";
import ButtonSubmit from "../../../Utils/ButtonSubmit";
import {ADMIN_USERS} from "../../../../Constants/constants";
import {Wave} from "better-react-spinkit";
import IdField from "../../AdminLayout/IdField";
import InputFormControl from "../../../Utils/Form/InputFormControl";

const UpdateUserForm = ({match}) => {

    const [user, setUser] = useState();
    const [title] = useState("Send");
    let history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('tokenUser');
        Axios.get(`${URL_API}${match.params.id}`, {headers: {Authorization: "Bearer " + token, 'Content-type': 'application/json'}})
            .then(response => {
                setUser(response.data);
            })
            .catch(error => console.log(error));
    })

    const updateThisUser = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('tokenUser');
        Axios.put(`${URL_API}` + match.params.id, {login:e.target.elements.login.value}, {headers: {Authorization: "Bearer " + token, 'Content-type': 'application/json'}})
            .then(history.push(ADMIN_USERS));
    };



    return (
        <div style={{height:"150vh"}}>

            <ConnectedUserNav />
            {
                user ?
                    <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                        <Box w="80%" p={4} mb={5} className="align-self-center">
                            <div className="form" style={{height:"140vh"}}>
                                <h2 className="text-uppercase" style={{color:"#d83a3a"}}>Update User</h2>
                                <form onSubmit={updateThisUser}>
                                    <Stack spacing={4}>

                                        <IdField item={user} />


                                        <InputFormControl
                                            name="login"
                                            id="login"
                                            label="login"
                                            placeholder={user.login}
                                        />

                                        <InputFormControl
                                            name="email"
                                            id="email"
                                            placeholder={user.email}
                                            isDisabled={true}
                                        />

                                        <ButtonSubmit title={title} />

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
export default UpdateUserForm;