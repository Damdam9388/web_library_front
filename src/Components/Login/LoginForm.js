import React, {useState} from "react";
import {Button, Input, Stack, InputGroup, InputRightElement} from "@chakra-ui/core";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import FormControl from "@chakra-ui/core/dist/FormControl";
import './LoginForm.scss';
import {Link} from "react-router-dom";
import * as CONSTANTS from "../../Constants/constants";
import ButtonSubmitLoader from "../Utils/ButtonSubmitLoader";
import ButtonSubmitDefault from "../Utils/ButtonSubmitDefault";

const LoginForm = ({getLogin, load}) => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("Login");
    const handleClick = () => setShow(!show);


    return (
    <div className="form">
        <form onSubmit={getLogin}>
            <Stack spacing={3}>
                <FormControl isRequired>
                        <FormLabel htmlFor="email" color="black">Email</FormLabel>
                        <Input
                            mb="1rem"
                            borderTop="none"
                            borderLeft="none"
                            borderRight="none"
                            borderRadius="none"
                            borderBottomColor="black"
                            bg="transparent"
                            type="email"
                            name="email"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email..."
                            _focus={{
                                outline: "none",
                                bg: "transparent",
                                color: "black",
                            }}
                            color="black"
                            p="0"
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel htmlFor="password" color="black">Password</FormLabel>
                        <InputGroup>
                            <Input
                                borderTop="none"
                                borderLeft="none"
                                borderRight="none"
                                borderRadius="none"
                                bg="transparent"
                                type={show ? "text" : "password"}
                                name="password"
                                id="password"
                                borderBottomColor="black"
                                aria-describedby="emailHelp"
                                placeholder="Enter Password..."
                                p="0"
                                color="black"
                                _focus={{
                                    outline: "none",
                                    bg: "transparent",
                                    color: "black",
                                }}
                            />
                            <InputRightElement width="4.5rem">
                                <Button className="text-white" bg="#263246" borderColor="#263246" h="2.1rem" onClick={handleClick} _hover={{ bg: "#AAF", borderColor: "#AAF" }}>
                                    {show ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>


                    <div className="row mb-5">
                        <div className="col-md-12 d-flex flex-column justify-content-end align-items-md-end">
                            <Button color="dark" bg="#d83a3a" borderColor="#d83a3a" size="sm" _hover={{ bg: "#FC8181", borderColor: "#FC8181" }}>
                                <Link className="text-white" to={CONSTANTS.FORGOT_PASSWORD}>Forgot your password</Link>
                            </Button>
                        </div>
                    </div>




                    {load ? (
                        <ButtonSubmitLoader/>
                    ) : (
                        <ButtonSubmitDefault title={title}/>
                    )
                    }

            </Stack>
        </form>

        </div>

    );
};
export default LoginForm;
