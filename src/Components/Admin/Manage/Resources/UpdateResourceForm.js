import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axiosInstance from "../../../../AxiosInstance";
import {URL_API} from "../../../../Constants/UrlConstants";
import {ADMIN_RESOURCES} from "../../../../Constants/constants";
import ConnectedUserNav from "../../../../Layout/Nav/ConnectedUserNav";
import {Box, Stack} from "@chakra-ui/core";
import ButtonSubmit from "../../../Utils/ButtonSubmit";
import {Wave} from "better-react-spinkit";
import Select from '../../../SelectResource/Select';
import * as CONSTANTS from "../../../../Constants/UrlConstants";
import IdField from "../../AdminLayout/IdField";
import NameField from "../../AdminLayout/NameField";
import UrlField from "../../AdminLayout/UrlField";
import AuthorField from "../../AdminLayout/AuthorField";
import SelectFormControl from "../../../Utils/Form/SelectFormControl";
import PublisherField from "../../AdminLayout/PublisherField";
import LanguageField from "../../../AddResource/FieldsRefacto/LanguageField";


const UpdateResourceForm = ({match}) => {

    const [resource, setResource] = useState();
    const [title] = useState("Send");
    let history = useHistory();


    useEffect(() => {
        axiosInstance().get(`${URL_API}${match.params.id}`)
            .then(response => {
                setResource(response.data);
            })
            .catch(error => console.log(error));
    })

    const updateThisResource = (e) => {
        e.preventDefault();
        axiosInstance.put(
            `${URL_API}` + match.params.id,
            {
                name:e.target.elements.name.value,
                url:e.target.elements.url.value,
                language:e.target.elements.language.value,
                level:e.target.elements.level.value,
            })
            .then(history.push(ADMIN_RESOURCES));
    };

    return (
        <div style={{height:"150vh"}}>

            <ConnectedUserNav />

            {
                resource ?
                    <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                        <Box w="80%" p={4} mb={5} className="align-self-center">
                            <div className="form" style={{height: "140vh"}}>
                                <h2 className="text-uppercase" style={{color: "#d83a3a"}}>Update Resource</h2>
                                <form onSubmit={updateThisResource}>
                                    <Stack spacing={4}>

                                        <IdField item={resource}/>

                                        <NameField item={resource} attribute='resourceName'/>

                                        <UrlField resource={resource}/>

                                        <AuthorField resource={resource}/>

                                        <LanguageField />

                                        <SelectFormControl
                                            label="level"
                                            children={
                                                <Select
                                                name="level"
                                                placeholder="Level..."
                                                endpoint={CONSTANTS.ENDPOINT_SELECT_LEVEL}
                                                lblAttributeKey="label"
                                                />
                                            }
                                        />

                                        <PublisherField resource={resource}/>

                                        <ButtonSubmit title={title}/>

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