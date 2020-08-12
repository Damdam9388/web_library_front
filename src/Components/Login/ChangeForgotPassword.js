import React, {useState} from "react";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import {Button, Input, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/core";
import Icon from "@chakra-ui/core/dist/Icon";
import FormControl from "@chakra-ui/core/dist/FormControl";
import {withRouter} from "react-router-dom";
import {userChangeForgotPassword} from "../../Services/AuthenticationServices";

const ChangeForgotPassword = ({match}) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const changePassword = (e) => {
        const token = match.params.token;
        const password = e.target.elements.password.value;
        e.preventDefault();
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
                </div>
            </div>
        </div>
    );
};

export default withRouter(ChangeForgotPassword)