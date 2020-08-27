import {Button} from "@chakra-ui/core";
import React from "react";

//composant du bouton normal de soumission des formulaires
const ButtonSubmitDefault = ({title}) => {
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
        {title}
    </Button>;
};
export default ButtonSubmitDefault;