import axios from 'axios';
import * as CONSTANTS from "../Constants/UrlConstants";


export const getPrograms = (config) => {
    return axios.get(CONSTANTS.ENDPOINT_PROGRAMS,config)
};