export const BASE_URL = "http://10.7.55.80:5001/api/v1/";


export const LOGIN = `${BASE_URL}users/login`;
export const REGISTER = `${BASE_URL}users/signup`;
export const OTPVERIFY = `${BASE_URL}users/verifyotp`;
export const UPDATEPROFILE = `${BASE_URL}users/UpdateUserProfile`;
export const FORGOTPASSWORD = `${BASE_URL}users/forgotpassword`;


export const UPLOAD_IMAGE = (userId) =>  `${BASE_URL}/students/${userId}/image`;

export const GET_STATE = (country) =>  `${BASE_URL}country?country=${country}`;
export const GET_CITY = (state) =>  `${BASE_URL}country?state=${state}`;