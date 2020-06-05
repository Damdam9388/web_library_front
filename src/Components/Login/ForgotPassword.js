import React from "react";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import {Button, Input, InputGroup, InputLeftElement} from "@chakra-ui/core";
import Icon from "@chakra-ui/core/dist/Icon";
import FormControl from "@chakra-ui/core/dist/FormControl";
import {userForgotPassword} from "../../Services/AuthenticationServices";

const ForgotPassword = () => {

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

            <div className="col-md-12 text-center">
            <Button
                type="submit"
                rightIcon="arrow-forward"
                variantColor="telegram"
                variant="solid"
                width="150px"
                border="transparent"
            >
            submit
            </Button>
            </div>
        </form>
    );
};

export default ForgotPassword;