import {Button} from "@chakra-ui/core";
import React from "react";

const ButtonSubmitDefault = ({title}) => {
    return <Button
        type="submit"
        rightIcon="arrow-forward"
        bg="#d83a3a"
        variant="red"
        width="full"
        border="transparent"
        _hover={{bg: "#fd3636"}}
    >
        {title}
    </Button>;
};
export default ButtonSubmitDefault;