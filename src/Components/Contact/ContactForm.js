import React, {useState} from "react";
import './ContactForm.scss'
import ButtonSubmitLoader from "../Utils/ButtonSubmitLoader";
import ButtonSubmitDefault from "../Utils/ButtonSubmitDefault";
import InputContact from "./InputContact";

const ContactForm = ({sendMessage, load}) => {

    const [title, setTitle] = useState("Send Message");

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
                                    <label>Message</label>
                                </div>
                            </div>

                            {load ? (
                                <ButtonSubmitLoader/>
                            ) : (
                                <ButtonSubmitDefault title={title}/>
                            )
                            }
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default ContactForm;
