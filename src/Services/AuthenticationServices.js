import axios from 'axios';
import {ENDPOINT_CHANGE_PASS, ENDPOINT_FORGOT_PASS, ENDPOINT_SIGNUP, ENDPOINT_LOGIN} from "../Constants/UrlConstants";

export const getSignUp = (userName, email, password, confirmPassword) => {
     return axios.post(ENDPOINT_SIGNUP,{username:userName, email: email, password: password, confirmPassword})
};

export const getLogin = (email, password) => {
     return axios.post(ENDPOINT_LOGIN, {username: email, password: password})
};

export const userForgotPassword = (email) => {
     return axios.post(ENDPOINT_FORGOT_PASS, {username: email})
};

export const userChangeForgotPassword = (token, password) => {
     return axios.put(`${ENDPOINT_CHANGE_PASS}/${token}`, {password})
};