import React, {useContext}from "react";
import {Circle} from "better-react-spinkit";
import { Button, Input, Stack, InputGroup, InputLeftElement } from "@chakra-ui/core";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import FormControl from "@chakra-ui/core/dist/FormControl";
import { Select } from "@chakra-ui/core";
import SelectAuthor from "../SelectResource/SelectAuthor";
import SelectLevel from "../SelectResource/SelectLevel";
import SelectTopic from "../SelectResource/SelectTopic";
import { Box } from "@chakra-ui/core";
import UserContext from "../Context/UserContext";
import {Link} from 'react-router-dom';
import * as CONSTANTS from "./../../Constants/constants";
import logo from './../../Images/logo.PNG';
import { CONNECTED_USER } from "./../../Constants/constants";

const AddResourceForm = ({getAddedResource, load})=>{
const {username} = useContext(UserContext);

    return(
        <div style={{height:"150vh"}}> 
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img className= "pr-5" src={logo} alt="logo" width="15%"/>    
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="text-dark font-weight-bold pr-5 nav-link" to={CONNECTED_USER}>Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="text-dark font-weight-bold pr-5 nav-link" to={CONSTANTS.PROGRAMS}>Programs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="text-dark font-weight-bold pr-5 nav-link" to={CONSTANTS.LOGIN}>Logout</Link>
                        </li>
                    </ul>
                    <span className="navbar-text font-weight-bold">
                        Welcome {username}
                    </span>
                </div>
            </nav>
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center"> 
                <Box w="80%" p={4} mb={5} className="align-self-center">
                    <div className="form" style={{height:"140vh"}}>
                        <h2 className="text-uppercase" style={{color:"#d83a3a"}}>Add a new resource</h2>
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
                            <SelectAuthor></SelectAuthor>
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
                            <SelectLevel></SelectLevel> 
                            </FormControl>

                            <FormControl isRequired>
                            <FormLabel htmlFor="topic">Topic</FormLabel>
                            <SelectTopic></SelectTopic> 
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
                                variantColor="red"
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
    


export default AddResourceForm;