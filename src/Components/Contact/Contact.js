import React, {useState} from "react";
import ContactForm from "./ContactForm";
import { useHistory } from 'react-router-dom';
import './ContactForm.scss';
import {sendContactMessageInfo} from "../../Services/ContactServices";
import * as CONSTANTS from "../../Constants/constants";

const Contact = (props) => {
    const [loading, setLoading] = useState(false);
    let history = useHistory();

    //Récupération des valeurs du formulaire
    const axiosData = (e) => {
        setLoading(true);
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const subject = e.target.elements.subject.value;
        const message = e.target.elements.message.value;
        e.preventDefault();
        //Envoyer la requette à symfony
        sendContactMessageInfo(name, email, subject, message)
            .then(response => {
                console.log(response);
                history.push(CONSTANTS.CONTACT_CONFIRMATION);
            })
            .catch(erreur => {
                console.log(erreur);
            })
            .finally(() => setLoading(false));;
    };

    return(
        <>
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                    <ContactForm sendMessage={axiosData} load={loading}/>
            </div>
        </>
    );
};

export default Contact;