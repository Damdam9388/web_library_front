import React, { useContext } from "react";
import {Stack} from "@chakra-ui/core";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import FormControl from "@chakra-ui/core/dist/FormControl";
import Select from "../SelectResource/Select";
import { Box } from "@chakra-ui/core";
import UserContext from "../Context/UserContext";
import ConnectedUserNav from "../../Layout/Nav/ConnectedUserNav";
import * as CONSTANTS from "../../Constants/UrlConstants";
import ButtonSubmit from "../Utils/ButtonSubmit";
import NameField from  "./FieldsRefacto/NameField";
import UrlField from "./FieldsRefacto/UrlField";
import AuthorInput from "./FieldsRefacto/AuthorInput";
import AuthorSelect from "./FieldsRefacto/AuthorSelect";
import LanguageField from "./FieldsRefacto/LanguageField";
import LevelField from "./FieldsRefacto/LevelField";


const AddResourceFormFramework = ({ getAddedResource, isLoading, isInput, setInput }) => {
    const { username } = useContext(UserContext);
    const title = "add ressource";

    const changeInput = (e) => {
        setInput(true);
    }

    const changeInputToFalse = (e) => {
        setInput(false);
    }


    return (
        <div style={{ height: "150vh" }}>

            <ConnectedUserNav username={username} />
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                <Box w="80%" p={4} mb={5} className="align-self-center">
                    <div className="form" style={{ height: "140vh" }}>
                        <h2 className="text-uppercase" style={{ color: "#4a9bd1" }}>Add a new resource</h2>
                        {/* On utilise l operateur ternaire : si showInput est vrai alors on soumet avec getAddedResourceInput*/}
                        {/* sinon on utilise getAddedResource */}
                        <form onSubmit={getAddedResource}>

                            <Stack spacing={4}>
                                
                                <NameField />
                                <UrlField />
                                {
                                    isInput ?
                                        <AuthorSelect showSelect={changeInputToFalse} />
                                        :
                                        <AuthorInput showInput={changeInput} />
                                }

                                <LanguageField />
                                <LevelField />

                                <FormControl isRequired>
                                    <FormLabel htmlFor="framework">Framework</FormLabel>
                                    <Select
                                        name="framework"
                                        placeholder="Framework..."
                                        endpoint={CONSTANTS.ENDPOINT_SELECT_FRAMEWORK}
                                        lblAttributeKey="label"
                                    />
                                </FormControl>

                                {/*si load = true(on rappelle que load est en fait isLoading) alors le loader tourne au milieu du bouton*/}
                                {/*si load = false, le bouton se présente normalement*/}
                                <ButtonSubmit title={title} load={isLoading}/>


                            </Stack>
                        </form>
                    </div>
                </Box>
            </div>
        </div>
    );
}



export default AddResourceFormFramework;