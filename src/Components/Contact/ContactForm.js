import React, {useState} from "react";
import './ContactForm.scss'
import ButtonSubmitLoader from "../Utils/ButtonSubmitLoader";
import ButtonSubmitDefault from "../Utils/ButtonSubmitDefault";

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
                                    <inputContact nameId={nameId[0]} label={"Name"}/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="styled-input">
                                    <inputContact nameId={nameId[1]} label={"Email"}/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="styled-input" style={{float: 'right'}}>
                                    <inputContact nameId={nameId[2]} label={"Subject"}/>
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
