import React from "react";
import FormControl from "@chakra-ui/core/dist/FormControl";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import Select from "../../SelectResource/Select";
import * as CONSTANTS from "../../../Constants/UrlConstants";


const LevelField = () => (

        <FormControl isRequired>
            <FormLabel htmlFor="level">Level</FormLabel>
            <Select
                name="level"
                placeholder="Level..."
                endpoint={CONSTANTS.ENDPOINT_SELECT_LEVEL}
                lblAttributeKey="label"
            />
        </FormControl>

);

export default LevelField;