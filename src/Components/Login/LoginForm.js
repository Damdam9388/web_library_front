import React, {useState} from "react";
import {Button, Input, Stack, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/core";
import Icon from "@chakra-ui/core/dist/Icon";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import FormControl from "@chakra-ui/core/dist/FormControl";
import './LoginForm.scss';
import {Link} from "react-router-dom";
import * as CONSTANTS from "../../constants";

const LoginForm = (props) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);


    return (
      <div className="form"> 
        <form onSubmit={props.getLogin}>
            <Stack spacing={3}>
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

                <div className="forgot_password">
                    <Link to={CONSTANTS.FORGOT_PASSWORD}>If you forgot your password click here !</Link>
                </div>

                <div className="col-md-12 text-center">
                    <Button
                        type="submit"
                        rightIcon="arrow-forward"
                        variantColor="telegram"
                        variant="solid"
                        width="150px"
                        border="transparent"
                    >
                        Login
                    </Button>
                </div>
            </Stack>
        </form>
        </div>
    );
};
export default LoginForm;
