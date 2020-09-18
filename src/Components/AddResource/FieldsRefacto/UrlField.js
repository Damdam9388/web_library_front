import React from "react";
import FormControl from "@chakra-ui/core/dist/FormControl";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/core";


const UrlField = () => (

    <FormControl isRequired>
        <FormLabel htmlFor="url">Url</FormLabel>
        <InputGroup>
            <InputLeftElement />
            <Input
                variant="outline"
                type="text"
                name="url"
                id="url"
                className="form-control"
                placeholder="Url..."
            />
        </InputGroup>
    </FormControl>

);

export default UrlField;