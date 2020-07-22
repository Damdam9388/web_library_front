import axios from 'axios';
import * as CONSTANTS from "../Constants/UrlConstants";


export const getPrograms = (config) => {
    return axios.get(CONSTANTS.ENDPOINT_PROGRAMS, config)
};

export const getResources = (id, config) => {
    return axios.get(CONSTANTS.ENDPOINT_RESOURCE_PROGRAM + `${id}`,config)
};