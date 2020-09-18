import React, {useState} from "react";
import ButtonSubmit from "../Utils/ButtonSubmit";
import InputContact from "./InputContact";

const ContactForm = ({sendMessage, load}) => {

    const [title] = useState("Send Message");

    return(
        <form onSubmit={sendMessage} style={{width:"40rem", backgroundColor:"#F8F8FF"}} className="px-5 py-3 rounded-bottom" >
            <div className="form-group">
                <InputContact nameId="name" label="Name" id="name" placeholder="enter your name"/>
            </div>

            <div className="form-group">
                <InputContact nameId="email" label="Email" id="email" placeholder="enter your email..."/>
            </div>

            <div className="form-group">
                <InputContact nameId="subject" label="Subject" id="subject" placeholder="enter your subject..."/>
            </div>

            <div className="form-group">
                <textarea required name="message" id="message" placeholder="enter your message..." className="form-control rounded-0 border-dark" rows="10"/>
            </div>


            {/*si load = true(on rappelle que load est en fait isLoading) alors le loader tourne au milieu du bouton*/}
            {/*si load = false, le bouton se présente normalement*/}
            <ButtonSubmit title={title} load={load}/>

        </form>
    );
};
export default ContactForm;
