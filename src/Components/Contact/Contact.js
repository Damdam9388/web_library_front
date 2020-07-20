import React from "react";
import ContactForm from "./ContactForm";
import { useHistory } from 'react-router-dom';
import './ContactForm.scss';
import {getContact} from "../../Services/ContactServices";


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
        getContact(name, email, subject, message)
            .then(response => {
                console.log(response);
                history.push('/');
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