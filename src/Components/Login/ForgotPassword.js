import React, {useState} from "react";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/core";
import Icon from "@chakra-ui/core/dist/Icon";
import FormControl from "@chakra-ui/core/dist/FormControl";
import {userForgotPassword} from "../../Services/AuthenticationServices";
import ButtonSubmitDefault from "../Utils/ButtonSubmitDefault";

//composant du formulaire de mot de passe oublié pour demander une reinitialisation du mot de passe au back-end
const ForgotPassword = () => {

    const [title] = useState("submit");

    const sendEmail = (e) => {
        const email = e.target.elements.email.value;
        e.preventDefault();
        userForgotPassword(email)
            .then(response => {
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
                    <form onSubmit={sendEmail}>
                        <FormControl isRequired>
                            <FormLabel htmlFor="InputEmail">Email</FormLabel>
                            <InputGroup>
                                <InputLeftElement children={<Icon name="email" color="black" />} />
                                <Input
                                    variant="outline"
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email..."
                                />
                            </InputGroup>
                        </FormControl>
            
                        <div className="col-md-12 text-center mt-lg-5">
                            <ButtonSubmitDefault title={title} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;