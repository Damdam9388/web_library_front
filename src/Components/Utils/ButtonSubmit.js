import {Button} from "@chakra-ui/core";
import React from "react";
import {Circle} from "better-react-spinkit";

//composant du bouton normal de soumission des formulaires
//title = le titre du bouton qui apparait tant qu'on pas cliqué dessus
//load = le state de chargement qui provient du composant parent et qui est a false par defaut
//du coup le bouton montre le titre si load = false et le composant circle(loader) si load = true
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
    >
        {load ? <Circle/> : title}
    </Button>;
};
export default ButtonSubmit;