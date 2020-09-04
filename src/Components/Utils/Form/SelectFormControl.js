import React from 'react';
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import FormControl from "@chakra-ui/core/dist/FormControl";

const SelectFormControl = ({children, label}) => {
    return (
        <FormControl isRequired>
            <FormLabel htmlFor={label}>{label}</FormLabel>
            {children}
        </FormControl>
    );
};

export default SelectFormControl;