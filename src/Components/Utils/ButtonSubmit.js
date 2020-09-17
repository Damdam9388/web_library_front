import {Button} from "@chakra-ui/core";
import React from "react";
import {Circle} from "better-react-spinkit";

const ButtonSubmit = ({title, load}) => {
    return <Button
        type="submit"
        color="white"
        rightIcon={load ? "" : "arrow-forward"}
        bg="#0d234b"
        variant="red"
        width="full"
        border="transparent"
        className="mt-5"
        _hover={{bg: "#4a9bd1"}}
        isDisabled={load ? true : false}
    >
        {load ? <Circle/> : title}
    </Button>;
};
export default ButtonSubmit;