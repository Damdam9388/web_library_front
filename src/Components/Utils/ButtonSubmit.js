import {Button} from "@chakra-ui/core";
import React from "react";
import {Circle} from "better-react-spinkit";

const ButtonSubmit = ({title, load}) => {
    return <Button
        type="submit"
        rightIcon={load ? "" : "arrow-forward"}
        variantColor="blue"
        variant="outline"
        width="full"
        className="mt-5 text-white"
        bg="#4a9bd1"
        _hover={{bg: "#4a9bd1"}}
        isDisabled={load ? true : false}
    >
        {load ? <Circle/> : title}
    </Button>;
};
export default ButtonSubmit;