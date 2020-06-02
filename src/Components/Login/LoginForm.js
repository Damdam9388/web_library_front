import React, {useState} from "react";
import {Button, Input, Stack, InputGroup, InputLeftElement, InputRightElement, Checkbox} from "@chakra-ui/core";
import Icon from "@chakra-ui/core/dist/Icon";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import FormControl from "@chakra-ui/core/dist/FormControl";
import './LoginForm.scss';
import {Link} from "react-router-dom";
import * as CONSTANTS from "../../constants";
import Box from "@chakra-ui/core/dist/Box";

const LoginForm = (props) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);


    return (
      <div className="form"> 
        <form onSubmit={props.getLogin}>
<<<<<<< HEAD

            <FormControl isRequired>
=======
            <Stack spacing={3}>
                <FormControl isRequired>
>>>>>>> ce5741ceb29d742b5033004f638c016b33e47223
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
                            <Button className="text-white bg-dark" h="2rem" size="sm" onClick={handleClick}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <Stack isInline float="right"  mb={5}>
                    <Box>
                        <Link to={CONSTANTS.FORGOT_PASSWORD}>Forgot your password</Link>
                    </Box>
                </Stack>

                <Button
                    type="submit"
                    rightIcon="arrow-forward"
                    variantColor="telegram"
                    variant="solid"
                    width="full"
                    border="transparent"
                >
                    Login
                </Button>

        </form>
<<<<<<< HEAD


=======
        </div>
>>>>>>> ce5741ceb29d742b5033004f638c016b33e47223
    );
};
export default LoginForm;
