import axiosInstance from "../AxiosInstance";
import * as CONSTANTS from "../Constants/UrlConstants";


export const getPrograms = () => {
    return axiosInstance.get(CONSTANTS.ENDPOINT_PROGRAMS)
};

export const getProgramInfo = (id) => {
    return axiosInstance.get(CONSTANTS.ENDPOINT_RESOURCE_PROGRAM + `${id}`)
};
