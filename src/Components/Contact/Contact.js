import React, {useState} from "react";
import ContactForm from "./ContactForm";
import { useHistory } from 'react-router-dom';
import './ContactForm.scss';
import {getContact} from "../../Services/ContactServices";
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
        console.log("name : " + name + "email : " + email + "subject : " + subject + "message : " + message);
        //Eviter la propagation de l'évenement
        e.preventDefault();
        //Envoyer la requette à symfony
        getContact(name, email, subject, message)
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
        <ContactForm sendMessage={axiosData} load={loading}/>
        </>
    );
};

export default Contact;