import React, {useState} from "react";
import './ContactForm.scss'
import ButtonSubmitLoader from "../Utils/ButtonSubmitLoader";
import ButtonSubmit from "../Utils/ButtonSubmit";
import InputContact from "./InputContact";
import {Stack} from "@chakra-ui/core";

const ContactForm = ({sendMessage, load}) => {

    const [title] = useState("Send Message");

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

                                    <InputContact nameId={"name"} label={"Name"}/>

                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="styled-input">

                                    <InputContact nameId={"email"} label={"Email"}/>

                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="styled-input" style={{float: 'right'}}>

                                    <InputContact nameId={"Subject"} label={"Subject"}/>

                                </div>
                            </div>
                            <div className="col-xs-12">
                                <div className="styled-input wide">
                                    <textarea required name="message" id="message"/>
                                    <label>message</label>
                                </div>
                            </div>

                            {/*si load = true(on rappelle que load est en fait isLoading) alors le loader tourne au milieu du bouton*/}
                            {/*si load = false, le bouton se présente normalement*/}
                            <ButtonSubmit title={title} load={load}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default ContactForm;
