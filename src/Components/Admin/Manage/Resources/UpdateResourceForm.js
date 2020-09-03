import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import Axios from "axios";
import {URL_API} from "../../../../Constants/UrlConstants";
import {ADMIN_RESOURCES} from "../../../../Constants/constants";
import ConnectedUserNav from "../../../../Layout/Nav/ConnectedUserNav";
import {Box, Stack} from "@chakra-ui/core";
import FormControl from "@chakra-ui/core/dist/FormControl";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import ButtonSubmit from "../../../Utils/ButtonSubmit";
import {Wave} from "better-react-spinkit";
import Select from '../../../SelectResource/Select';
import * as CONSTANTS from "../../../../Constants/UrlConstants";
import IdField from "../../AdminLayout/IdField";
import NameField from "../../AdminLayout/NameField";
import InputFormControl from "../../../Utils/Form/InputFormControl";


const UpdateResourceForm = ({match}) => {

    const [resource, setResource] = useState();
    const [title] = useState("Send");
    let history = useHistory();


    useEffect(() => {
        const token = localStorage.getItem('tokenUser');
        Axios.get(`${URL_API}${match.params.id}`, {headers: {Authorization: "Bearer " + token, 'Content-type': 'application/json'}})
            .then(response => {
                setResource(response.data);
            })
            .catch(error => console.log(error));
    })

    const updateThisResource = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('tokenUser');
        Axios.put(
            `${URL_API}` + match.params.id,
            {
                name:e.target.elements.name.value,
                url:e.target.elements.url.value,
                language:e.target.elements.language.value,
                level:e.target.elements.level.value,
            },
            {headers: {Authorization: "Bearer " + token, 'Content-type': 'application/json'}})
            .then(history.push(ADMIN_RESOURCES));
    };

    return (
        <div style={{height:"150vh"}}>

            <ConnectedUserNav />

            {
                resource ?
                    <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                        <Box w="80%" p={4} mb={5} className="align-self-center">
                            <div className="form" style={{height:"140vh"}}>
                                <h2 className="text-uppercase" style={{color:"#d83a3a"}}>Update Resource</h2>
                                <form onSubmit={updateThisResource}>
                                    <Stack spacing={4}>

                                        <IdField item={resource} />

                                        <NameField item={resource} attribute='resourceName' />

                                        <InputFormControl
                                            name="url"
                                            id="url"
                                            placeholder={resource.url}
                                            label="url"
                                        />

                                        <InputFormControl
                                            name="author"
                                            id="author"
                                            placeholder={resource['author']}
                                            label="author"
                                            isDisabled={true}
                                        />


                                        <FormControl isRequired>
                                          <FormLabel htmlFor="language">Language</FormLabel>
                                          <select name="language" id="language" className="form-control">
                                              <option value="French">French</option>
                                              <option value="English">English</option>
                                          </select>
                                        </FormControl>

                                        <FormControl isRequired>
                                            <FormLabel htmlFor="level">Level</FormLabel>
                                            <Select
                                            name="level"
                                            placeholder="Level..."
                                            endpoint={CONSTANTS.ENDPOINT_SELECT_LEVEL}
                                            lblAttributeKey="label"
                                            />
                                        </FormControl>

                                        <InputFormControl
                                            name="publisher"
                                            id="publisher"
                                            placeholder={resource['publisher']}
                                            label="publisher"
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

export default UpdateResourceForm;