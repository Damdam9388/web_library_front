import React from "react";
import {Circle} from "better-react-spinkit";
import { Button, Input, Stack, InputGroup, InputLeftElement } from "@chakra-ui/core";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import FormControl from "@chakra-ui/core/dist/FormControl";

const AddResourceForm = ({getAddedResource, load})=>{

    return(
        <div className="form" style={{height:"150vh"}}>
        <h2 className="text-uppercase">Add a new resource</h2>
        <form onSubmit={getAddedResource}>
            <Stack spacing={3}>

            <FormControl isRequired>
            <FormLabel htmlFor="Name">Name</FormLabel>
            <InputGroup>
                <InputLeftElement/>
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
            <FormLabel htmlFor="URL">Url</FormLabel>
            <InputGroup>
                <InputLeftElement/>
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

            <FormControl isRequired>
            <FormLabel htmlFor="name">Author</FormLabel>
            <InputGroup>
                <InputLeftElement/>
                <Input
                variant="outline"
                type="text"
                name="author"
                id="author"
                className="form-control"
                placeholder="Author..."
                />
            </InputGroup>
            </FormControl>

            <FormControl isRequired>
            <FormLabel htmlFor="language">Language</FormLabel>
            <InputGroup>
                <InputLeftElement/>
                <Input
                variant="outline"
                type="text"
                name="language"
                id="language"
                className="form-control"
                placeholder="Language..."
                />
            </InputGroup>
            </FormControl>

            <FormControl isRequired>
            <FormLabel htmlFor="level">Level</FormLabel>
            <InputGroup>
                <InputLeftElement/>
                <Input
                variant="outline"
                type="text"
                name="level"
                id="level"
                className="form-control"
                placeholder="Level..."
                />
            </InputGroup>
            </FormControl>

            <FormControl isRequired>
            <FormLabel htmlFor="level">Topic</FormLabel>
            <InputGroup>
                <InputLeftElement/>
                <Input
                variant="outline"
                type="text"
                name="topic"
                id="topic"
                className="form-control"
                placeholder="Topic..."
                />
            </InputGroup>
            </FormControl>

            {load ? (
            <Button
                type="submit"
                variantColor="telegram"
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
                variantColor="telegram"
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
        
    );
}
    


export default AddResourceForm;