import axios from 'axios';
import {ENDPOINT_CONTACT} from "../Constants/UrlConstants";

// factorisation de la requete axios pour rendre clean le code du composant Contact.js
export const sendContactMessageInfo = (name, email, subject, message) => {
    return axios.post(ENDPOINT_CONTACT, {name: name, email: email, subject: subject, message: message})
};