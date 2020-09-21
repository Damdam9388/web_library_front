import React from "react";
import './ConnectedUserPage.scss';
import {Link} from 'react-router-dom';
import { Alert } from "@chakra-ui/core";
import { AlertIcon } from "@chakra-ui/core";
import { AlertTitle } from "@chakra-ui/core";
import { AlertDescription } from "@chakra-ui/core";
import * as CONSTANTS from "../../Constants/constants";

const ContactConfirmationPage = ()=>{
    return(
        <div className="wrap" style={{height:"100vh"}}>
        <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            height="200px"
        >
        <AlertIcon size="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
            Message sent!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
            Thanks for contacting us. Our team will get back to you soon.<br/>
        
            <Link className="text-dark font-weight-bold pr-5 about_link" to={CONSTANTS.PROGRAMS}>Go back to programs page</Link>
        </AlertDescription>
        </Alert>
        </div>
    );
};
    


export default ContactConfirmationPage;