import axios from 'axios';
import {ENDPOINT_ADD_RESOURCE} from "../Constants/UrlConstants";
import * as CONSTANTS from "../Constants/constants";

export const addResources = (data, config, history, setIsLoading) => {
    return axios.post(ENDPOINT_ADD_RESOURCE, data, config)
        .then((res) => {
            console.log(res);
            history.push(CONSTANTS.PROGRAMS);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => setIsLoading(false));
};
