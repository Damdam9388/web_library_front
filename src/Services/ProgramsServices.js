import axiosInstance from "../AxiosInstance";
import * as CONSTANTS from "../Constants/UrlConstants";


export const getPrograms = () => {
    return axiosInstance().get(CONSTANTS.ENDPOINT_TOPIC_PROGRAMMING)
};

export const getProgramInfo = (id) => {
    return axiosInstance().get(`${id}`)
};
