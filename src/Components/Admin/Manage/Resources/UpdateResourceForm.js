import React, {useContext, useEffect, useState} from 'react';
import UserContext from "../../../Context/UserContext";
import {useHistory} from "react-router-dom";
import Axios from "axios";
import {URL_API} from "../../../../Constants/UrlConstants";
import {ADMIN_RESOURCES} from "../../../../Constants/constants";
import ConnectedUserNav from "../../../../Layout/Nav/ConnectedUserNav";
import {Box, Input, InputGroup, InputLeftElement, Stack} from "@chakra-ui/core";
import FormControl from "@chakra-ui/core/dist/FormControl";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import ButtonSubmitDefault from "../../../Utils/ButtonSubmitDefault";
import {Wave} from "better-react-spinkit";
import Select from '../../../SelectResource/Select';
import * as CONSTANTS from "../../../../Constants/UrlConstants";


const UpdateResourceForm = ({match}) => {

    const {username} = useContext(UserContext);
    const [resource, setResource] = useState();
    const [title] = useState("Send");
    let history = useHistory();
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token, 'Content-type': 'application/json'}};

    useEffect(() => {
        Axios.get(`${URL_API}${match.params.id}`, config)
            .then(response => {
                setResource(response.data);
            })
            .catch(error => console.log(error));
    })

    const updateThisResource = (e) => {
        e.preventDefault();
        Axios.put(
            `${URL_API}` + match.params.id,
            {
                name:e.target.elements.name.value,
                url:e.target.elements.url.value,
                language:e.target.elements.language.value,
                level:e.target.elements.level.value,
            },
            config)
            .then(history.push(ADMIN_RESOURCES));
    };

    return (
        <div style={{height:"150vh"}}>

            <ConnectedUserNav username={username} />

            {
                resource ?
                    <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                        <Box w="80%" p={4} mb={5} className="align-self-center">
                            <div className="form" style={{height:"140vh"}}>
                                <h2 className="text-uppercase" style={{color:"#d83a3a"}}>Update Resource</h2>
                                <form onSubmit={updateThisResource}>
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
                                                    placeholder={resource['@id']}
                                                    isDisabled={true}
                                                />
                                            </InputGroup>
                                        </FormControl>

                                        <FormControl isRequired>
                                            <FormLabel htmlFor="name">Name</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement />
                                                <Input
                                                    variant="outline"
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="form-control"
                                                    placeholder={resource.resourceName}
                                                />
                                            </InputGroup>
                                        </FormControl>

                                        <FormControl isRequired>
                                            <FormLabel htmlFor="url">Url</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement/>
                                                <Input
                                                    variant="outline"
                                                    type="text"
                                                    name="url"
                                                    id="url"
                                                    className="form-control"
                                                    placeholder={resource.url}
                                                />
                                            </InputGroup>
                                        </FormControl>

                                        <FormControl isRequired>
                                            <FormLabel htmlFor="author">Author</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement/>
                                                <Input
                                                  variant="outline"
                                                  type="text"
                                                  name="author"
                                                  id="author"
                                                  className="form-control"
                                                  placeholder={resource.author.authorName}
                                                  isDisabled={true}
                                              />
                                          </InputGroup>
                                      </FormControl>

                                      <FormControl isRequired>
                                          <FormLabel htmlFor="language">Language</FormLabel>
                                          <Select placeholder="Language..." variant="outline" type="text" name="language" id="language" className="form-control">
                                              <option value="French">French</option>
                                              <option value="English">English</option>
                                          </Select>
                                      </FormControl>

                                        <Select
                                        name="level"
                                        placeholder="Level..."
                                        endpoint={CONSTANTS.ENDPOINT_SELECT_LEVEL}
                                        lblAttributeKey="levelName"
                                        />

                                      <FormControl isRequired>
                                          <FormLabel htmlFor="publisher">Publisher</FormLabel>
                                          <InputGroup>
                                              <InputLeftElement/>
                                              <Input
                                                  variant="outline"
                                                  type="text"
                                                  name="publisher"
                                                  id="publisher"
                                                  className="form-control"
                                                  placeholder={resource.publisher.login}
                                                  isDisabled={true}
                                              />
                                          </InputGroup>
                                      </FormControl>

                                      <ButtonSubmitDefault title={title} />

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