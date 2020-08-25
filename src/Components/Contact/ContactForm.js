import React, {useState} from "react";
import './ContactForm.scss'
import ButtonSubmitLoader from "../Utils/ButtonSubmitLoader";
import ButtonSubmitDefault from "../Utils/ButtonSubmitDefault";
import InputContact from "./InputContact";

const ContactForm = ({sendMessage, load}) => {

    const [title, setTitle] = useState("Send Message");
    const [nameId, setNameId] = useState(["name", "email", "subject"]);

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
                                    <InputContact nameId={nameId[0]} label={"Name"} placeholder={"name"}/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="styled-input">
                                    <InputContact nameId={nameId[1]} label={"Email"} placeholder={"Email"}/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="styled-input" style={{float: 'right'}}>
                                    <InputContact nameId={nameId[2]} label={"Subject"} placeholder={"subject"}/>
                                </div>
                            </div>
                            <div className="col-xs-12">
                                <div className="styled-input wide">
                                    <textarea required name="message" id="message"/>
                                    <label>message</label>
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
