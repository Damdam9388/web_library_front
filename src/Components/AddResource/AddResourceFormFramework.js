
import React, { useContext } from "react";
import { Circle } from "better-react-spinkit";
import { Button, Input, Stack, InputGroup, InputLeftElement } from "@chakra-ui/core";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import FormControl from "@chakra-ui/core/dist/FormControl";
import Select from "../SelectResource/Select";
import { Box } from "@chakra-ui/core";
import UserContext from "../Context/UserContext";
import ConnectedUserNav from "../../Layout/Nav/ConnectedUserNav";
import * as CONSTANTS from "../../Constants/UrlConstants";


const AddResourceFormFramework = ({ getAddedResource, isLoading, isInput, setInput }) => {
    const { username } = useContext(UserContext);


    const changeInput = (e) => {
        setInput(true);
    }

    const changeInputToFalse = (e) => {
        setInput(false);
    }


    return (
        <div style={{ height: "150vh" }}>

            <ConnectedUserNav username={username} />
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                <Box w="80%" p={4} mb={5} className="align-self-center">
                    <div className="form" style={{ height: "140vh" }}>
                        <h2 className="text-uppercase" style={{ color: "#4a9bd1" }}>Add a new resource</h2>
                        {/* On utilise l operateur ternaire : si showInput est vrai alors on soumet avec getAddedResourceInput*/}
                        {/* sinon on utilise getAddedResource */}
                        <form onSubmit={getAddedResource}>

                            <Stack spacing={4}>

                                <FormControl isRequired>
                                    <FormLabel htmlFor="Name">Name</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement />
                                        <Input
                                            variant="outline"
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="form-control"
                                            placeholder="Title..."
                                        />
                                    </InputGroup>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel htmlFor="url">Url</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement />
                                        <Input
                                            variant="outline"
                                            type="text"
                                            name="url"
                                            id="url"
                                            className="form-control"
                                            placeholder="Url..."
                                        />
                                    </InputGroup>
                                </FormControl>


                                {
                                    isInput ?
                                        <FormControl isRequired>
                                            <FormLabel htmlFor="author">Author</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement />
                                                <Input
                                                    variant="outline"
                                                    type="text"
                                                    name="author"
                                                    id="author"
                                                    className="form-control"
                                                    placeholder="author..."
                                                />
                                            </InputGroup>
                                            <button onClick={changeInputToFalse}>Select an existing author</button>
                                        </FormControl>
                                        :
                                        <FormControl isRequired id="parap">
                                            <FormLabel htmlFor="name">Author</FormLabel>
                                            <Select
                                                name="author"
                                                placeholder="Author..."
                                                endpoint={CONSTANTS.ENDPOINT_SELECT_AUTHOR}
                                                lblAttributeKey="label"
                                            />
                                            <button onClick={changeInput}>Add a new author</button>
                                        </FormControl>
                                }



                                <FormControl isRequired>
                                    <FormLabel htmlFor="language">Language</FormLabel>
                                    <select placeholder="Language..." variant="outline" type="text" name="language" id="language" className="form-control">
                                        <option value="French">French</option>
                                        <option value="English">English</option>
                                    </select>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel htmlFor="level">Level</FormLabel>
                                    <Select
                                        name="level"
                                        placeholder="Level..."
                                        endpoint={CONSTANTS.ENDPOINT_SELECT_LEVEL}
                                        lblAttributeKey="label"
                                    />
                                </FormControl>


                                <FormControl isRequired>
                                    <FormLabel htmlFor="framework">Framework</FormLabel>
                                    <Select
                                        name="framework"
                                        placeholder="Framework..."
                                        endpoint={CONSTANTS.ENDPOINT_SELECT_FRAMEWORK}
                                        lblAttributeKey="label"
                                    />
                                </FormControl>

                                {isLoading ? (
                                    <Button
                                        type="submit"
                                        variantColor="blue"
                                        variant="solid"
                                        width="full"
                                        border="transparent"
                                    >
                                        <Circle />
                                    </Button>
                                ) : (
                                        <Button
                                            type="submit"
                                            rightIcon="arrow-forward"
                                            variantColor="blue"
                                            variant="solid"
                                            width="150px"
                                            border="transparent"
                                        >
                                            Add resource
                                        </Button>
                                    )
                                }

                            </Stack>
                        </form>
                    </div>
                </Box>
            </div>
        </div>
    );
}



export default AddResourceFormFramework;