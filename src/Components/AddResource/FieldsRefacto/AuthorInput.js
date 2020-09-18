import React from "react";
import FormControl from "@chakra-ui/core/dist/FormControl";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import Select from "../../SelectResource/Select";
import * as CONSTANTS from "../../../Constants/UrlConstants";


const AuthorInput = ({showInput}) => (
<>
        <FormControl isRequired id="parap">
            <FormLabel htmlFor="name">Author</FormLabel>
            <Select
                name="author"
                placeholder="Author..."
                endpoint={CONSTANTS.ENDPOINT_SELECT_AUTHOR}
                lblAttributeKey="label"
            />
        </FormControl>
        <button onClick={showInput}>Add a new author</button>

</>
);

export default AuthorInput;