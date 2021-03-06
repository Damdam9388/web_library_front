import React, {useState, useContext} from "react";
import ContactForm from "./ContactForm";
import { useHistory } from 'react-router-dom';
import {sendContactMessageInfo} from "../../Services/ContactServices";
import Background1 from "../../Images/background2.jpg";
import ConnectedUserNav from "../../Layout/Nav/ConnectedUserNav";
import UserContext from "../Context/UserContext";
import * as CONSTANTS from "../../Constants/constants";

const Contact = (props) => {
    const [loading, setLoading] = useState(false);
    let history = useHistory();
    const {username} = useContext(UserContext);

    //Récupération des valeurs du formulaire
    const axiosData = (e) => {
        e.preventDefault();
        setLoading(true);
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const subject = e.target.elements.subject.value;
        const message = e.target.elements.message.value;
        //Envoyer la requette à symfony
        sendContactMessageInfo(name, email, subject, message)
            .then(response => {
                console.log(response);
                history.push(CONSTANTS.CONTACT_CONFIRMATION_USER);
            })
            .catch(erreur => {
                console.log(erreur);
            })
            .finally(() => setLoading(false));
    };

    return(
<>
        <ConnectedUserNav username={username} />
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center" style={{height:"100vh"}}>
                <div style={{width:"40rem", background: "linear-gradient(to right, #83a4d4, #b6fbff)"}} className="text-center py-3 rounded-top">
                    <h1 className="text-white">CONTACT US</h1>
                    <h4 className="text-white">We'd love to hear from you!</h4>
                </div>
                <ContactForm sendMessage={axiosData} load={loading}/>
            </div>
</>
    );
};

export default Contact;