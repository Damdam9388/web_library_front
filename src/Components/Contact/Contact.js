import React, {useContext} from "react";
import ContactForm from "./ContactForm";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import {ENDPOINT_CONTACT} from "../../UrlConstants"
import './ContactForm.scss';


const Contact = (props) => {

    let history = useHistory();

    //Récupération des valeurs du formulaire
    const axiosData = (e) => {
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const subject = e.target.elements.subject.value;
        const message = e.target.elements.message.value;
        console.log("name : " + name + "email : " + email + "subject : " + subject + "message : " + message);
        //Eviter la propagation de l'évenement
        e.preventDefault();
        //Envoyer la requette à symfony
        axios.post(ENDPOINT_CONTACT, {name: name, email: email, subject: subject, message: message})
            .then(response => {
                console.log(response);
            })
            .catch(erreur => {
                console.log(erreur);
            });
    };

    return(
        <>
        <ContactForm sendMessage={axiosData} />
        </>
    );
};

export default Contact;