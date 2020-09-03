import React from "react";
import FormControl from "@chakra-ui/core/dist/FormControl";
import FormLabel from "@chakra-ui/core/dist/FormLabel";


const LanguageField = () => (

    <FormControl isRequired>
        <FormLabel htmlFor="language">Language</FormLabel>
        <select placeholder="Language..." name="language" id="language" className="form-control">
            <option value="French">French</option>
            <option value="English">English</option>
        </select>
    </FormControl>

);

export default LanguageField;