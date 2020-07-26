import React from "react";
import {Circle} from "better-react-spinkit";
import { Button, Input, Stack, InputGroup, InputLeftElement } from "@chakra-ui/core";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import FormControl from "@chakra-ui/core/dist/FormControl";
import { Select } from "@chakra-ui/core";

const AddResourceForm = ({getAddedResource, load})=>{

    return(
        <div className="form" style={{height:"150vh"}}>
        <h2 className="text-uppercase">Add a new resource</h2>
        <form onSubmit={getAddedResource}>
            <Stack spacing={3}>

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
            <Select placeholder="Select option" variant="outline" type="text" name="author" id="author" className="form-control">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </Select>
            </FormControl>

            <FormControl isRequired>
            <FormLabel htmlFor="language">Language</FormLabel>
            <Select placeholder="Language..." variant="outline" type="text" name="language" id="language" className="form-control">
                <option value="option1">French</option>
                <option value="option2">English</option>
            </Select>
            </FormControl>

            <FormControl isRequired>
            <FormLabel htmlFor="level">Level</FormLabel>
            <Select placeholder="Level..." variant="outline" type="text" name="level" id="level" className="form-control">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </Select>
            </FormControl>

            <FormControl isRequired>
            <FormLabel htmlFor="level">Topic</FormLabel>
            <Select placeholder="Topic..." variant="outline" type="text" name="topic" id="topic" className="form-control">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </Select>
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