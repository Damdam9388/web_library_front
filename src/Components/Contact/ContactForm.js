import React, {useState} from "react";
import {Button, Input, Stack, InputGroup, InputRightElement} from "@chakra-ui/core";
import './ContactForm.scss'
import {Circle} from "better-react-spinkit";


const Contact = ({sendMessage, load}) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    return(
        <>
                <div className="contact">
                    <h1>CONTACT US</h1>
                    <div className="container">
                        <h4>We'd love to hear from you!</h4>
                        <form onSubmit={sendMessage}>
                        <div className="row input-container">
                                <div className="col-xs-12">
                                    <div className="styled-input wide">
                                        <input name ="name" id ="name" type="text" required />
                                        <label>Name</label> 
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="styled-input">
                                        <input name ="email" id ="email" type="text" required />
                                        <label>Email</label> 
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="styled-input" style= {{float:'right'}}>
                                        <input name ="subject" id ="subject" type="text" required />
                                        <label>Subject</label> 
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <div className="styled-input wide">
                                        <textarea required name ="message" id ="message"/>
                                        <label>Message</label>
                                    </div>
                                </div>
                                {load ? (
                                    <Button
                                        type="submit"
                                        bg="#d83a3a"
                                        variant="solid"
                                        width="full"
                                        border="transparent"
                                        _hover={{ bg: "#d43c3c" }}
                                    >
                                        <Circle/>
                                    </Button>
                                ) : (
                                    <Button
                                        type="submit"
                                        rightIcon="arrow-forward"
                                        bg="#263246"
                                        variant="solid"
                                        width="full"
                                        border="transparent"
                                        _hover={{ bg: "#6d7788" }}
                                    >
                                    Send Message
                                    </Button>
                                )
                                }
                        </div>
                        </form>
                    </div>
                </div>
        </>
    );
};
export default Contact;
