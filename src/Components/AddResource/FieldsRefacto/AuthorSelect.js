import React, {useState} from "react";
import FormControl from "@chakra-ui/core/dist/FormControl";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/core";



const AuthorSelect = ({showSelect}) => (
<>
        <FormControl isRequired>
            <FormLabel htmlFor="author">Author</FormLabel>
            <InputGroup>
                <InputLeftElement />
                <Input
                    variant="outline"
                    type="text"
                    name="author"
                    id="author"
                    className="form-control"
                    placeholder="author..."
                />
            </InputGroup>
        </FormControl>
        <button onClick={showSelect}>Select an existing author</button>
</>


);

export default AuthorSelect;