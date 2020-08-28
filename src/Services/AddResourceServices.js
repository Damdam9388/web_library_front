import axios from 'axios';
import {ENDPOINT_ADD_RESOURCE} from "../Constants/UrlConstants";
import * as CONSTANTS from "../Constants/constants";

export const addResource = (data, config) => {
    return axios.post(ENDPOINT_ADD_RESOURCE, data, config)
};

export const loadResources = (data, config, history, setIsLoading) => {
    return addResource(data, config)
        .then((res) => {
            console.log(res);
            history.push(CONSTANTS.PROGRAMS);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => setIsLoading(false));
};
