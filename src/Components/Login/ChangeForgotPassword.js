import React, {useState} from "react";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import {Button, Input, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/core";
import Icon from "@chakra-ui/core/dist/Icon";
import FormControl from "@chakra-ui/core/dist/FormControl";
import axios from "axios";
import {ENDPOINT_CHANGE_PASS} from "../../UrlConstants";
import {withRouter} from "react-router-dom";

const ChangeForgotPassword = ({match}) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    console.log(match.params);
    const changePassword = (e) => {
        const token = match.params.token;
        const password = e.target.elements.password.value;
        e.preventDefault();
        axios.put(`${ENDPOINT_CHANGE_PASS}/${token}`, {password})
            .then(response => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    };

    return(
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

export default withRouter(ChangeForgotPassword)