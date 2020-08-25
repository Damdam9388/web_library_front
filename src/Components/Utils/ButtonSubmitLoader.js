import {Button} from "@chakra-ui/core";
import {Circle} from "better-react-spinkit";
import React from "react";

const ButtonSubmitLoader = () =>{
    return <Button
        type="submit"
        bg="#FC8181"
        variant="solid"
        width="full"
        border="transparent"
        _hover={{bg: "#F6AD55"}}
    >
        <Circle/>
    </Button>;
};
export default ButtonSubmitLoader;