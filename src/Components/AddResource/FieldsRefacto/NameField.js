import React from "react";
import FormControl from "@chakra-ui/core/dist/FormControl";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/core";


const NameField = () => (

    <FormControl isRequired>
        <FormLabel htmlFor="Name">Name</FormLabel>
        <InputGroup>
            <InputLeftElement />
            <Input
                variant="outline"
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Title..."
            />
        </InputGroup>
    </FormControl>

);

export default NameField;