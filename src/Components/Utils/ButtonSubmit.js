import {Button} from "@chakra-ui/core";
import React from "react";
import {Circle} from "better-react-spinkit";

//composant du bouton normal de soumission des formulaires
const ButtonSubmit = ({title, load}) => {
    return <Button
        type="submit"
        color="white"
        rightIcon="arrow-forward"
        bg="#0d234b"
        variant="red"
        width="full"
        border="transparent"
        _hover={{bg: "#4a9bd1"}}
    >
        {load ? <Circle/> : title}
    </Button>;
};
export default ButtonSubmit;