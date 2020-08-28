import React, {useState} from "react";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import {Button, Input, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/core";
import Icon from "@chakra-ui/core/dist/Icon";
import FormControl from "@chakra-ui/core/dist/FormControl";
import {withRouter} from "react-router-dom";
import {userChangeForgotPassword} from "../../Services/AuthenticationServices";
import ButtonSubmitDefault from "../Utils/ButtonSubmitDefault";

//ce composant est accessible seulement depuis le lien envoyé en mail au user qui demande une reinitialisation de mot de passe
//il fait suite au composant ForgotPassword
const ChangeForgotPassword = ({match}) => {
    const [show, setShow] = useState(false);
    const [title] = useState("submit");
    const handleClick = () => setShow(!show);

    //action de la requête pour créer un nouveau mot de passe
    //qui va etre envoyé au back-end via une requête PUT (cad UPDATE)
    const changePassword = (e) => {
        //Le lien dans le mail contient un token transmis par le back-end
        //il faut récupérer ce token afin de le renvoyer au back-end dans la requête
        //ce token servira à authentifier l'utilisateur
        const token = match.params.token;
        //le nouveau mot de passe créé
        const password = e.target.elements.password.value;
        e.preventDefault();
        //on envoie la requête PUT
        userChangeForgotPassword(token, password)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return(
        <div className="row" style={{height: "100vh"}}>
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                <div className="jumbotron" style={{width:"70%"}} >
                    <form onSubmit={changePassword}>
                        <FormControl isRequired>
                            <FormLabel htmlFor="InputPassword">Password</FormLabel>
                            <InputGroup>
                                <InputLeftElement children={<Icon name="lock" color="black" />} />
                                <Input
                                    variant="outline"
                                    type={show ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter Password..."
                                />
                                <InputRightElement width="4.5rem">
                                    <Button h="2rem" size="sm" onClick={handleClick}>
                                        {show ? "Hide" : "Show"}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
            
                        <div className="col-md-12 text-center">
                            <ButtonSubmitDefault title={title} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default withRouter(ChangeForgotPassword)