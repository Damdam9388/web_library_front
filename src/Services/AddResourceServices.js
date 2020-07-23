import axios from 'axios';
import {ENDPOINT_ADD_RESOURCE} from "../Constants/UrlConstants";

// factorisation de la requete axios pour rendre clean le code du composant AddResource.js
export const addResource = (data, config) => {
    return axios.post(ENDPOINT_ADD_RESOURCE, data, config)
};