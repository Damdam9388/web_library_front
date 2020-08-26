import {Button} from "@chakra-ui/core";
import {Circle} from "better-react-spinkit";
import React from "react";

const ButtonSubmitLoader = () =>{
    return <Button
        type="submit"
        color="white"
        bg="#0d234b"
        variant="solid"
        width="full"
        border="transparent"
        _hover={{bg: "#4a9bd1"}}
    >
        <Circle/>
    </Button>;
};
export default ButtonSubmitLoader;