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
    //cf chakra ui
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    //pour la refactorisation du bouton submit
    const [title, setTitle] = useState("Login");

    return (
    <div className="form">
        {/*en fait la méthode axiosLogin qui est derrière*/}
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
                                <Button className="text-white" bg="#4a9bd1" borderColor="#4a9bd1" h="2.1rem" onClick={handleClick} _hover={{ bg: "#78a6c5", borderColor: "#78a6c5" }}>
                                    {show ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>

                    {/*bouton pour accéder au formulaire de mot de passe oublié*/}
                    <div className="row mb-5">
                        <div className="col-md-12 d-flex flex-column justify-content-end align-items-md-end">
                            <Button color="dark" bg="#4a9bd1" borderColor="#4a9bd1" size="sm" _hover={{ bg: "#78a6c5", borderColor: "#78a6c5" }}>
                                <Link className="text-white" to={CONSTANTS.FORGOT_PASSWORD}>Forgot your password</Link>
                            </Button>
                        </div>
                    </div>




                    {load ? (
                        //si load = true(on rappelle que load est en fait isLoading) alors le loader tourne au milieu du bouton
                        <ButtonSubmitLoader/>
                    ) : (
                        //si load = false, le bouton se présente normalement
                        <ButtonSubmitDefault title={title}/>
                    )
                    }

            </Stack>
        </form>

        </div>

    );
};
export default LoginForm;
