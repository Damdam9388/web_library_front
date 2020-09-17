import axiosInstance from "../AxiosInstance";
import {ENDPOINT_ADD_RESOURCE} from "../Constants/UrlConstants";
import * as CONSTANTS from "../Constants/constants";

export const addResources = (data, history, setIsLoading) => {
    return axiosInstance().post(ENDPOINT_ADD_RESOURCE, data)
        .then((res) => {
            console.log(res);
            history.push(CONSTANTS.PROGRAMS);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => setIsLoading(false));
};
