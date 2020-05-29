import React, {Component}from 'react';
import './Contact.scss'
import { Avatar, AvatarBadge } from "@chakra-ui/core";
import Nav from '../../Layout/Nav/Nav.js';

const Contact = () => {
    return(
        <>
        <Nav />
                <div className="contact">
                    <h1>CONTACT US</h1>
                </div>
        </>
        );
};
export default Contact;
