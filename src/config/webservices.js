// export const BASE_URL = "https://api.instantspace.app/api/v1/";
// export const BASE_URL_IMG = "https://api.instantspace.app/";

export const BASE_URL = 'http://10.7.54.74:5001/api/v1/';
export const BASE_URL_IMG = 'http://10.7.54.74:5001/';

export const SCOKET_URL = 'ws://localhost:8900';

export const LOGIN = `${BASE_URL}users/login`;
export const REGISTER = `${BASE_URL}users/signup`;
export const OTPVERIFY = `${BASE_URL}users/verifyotp`;
export const UPDATEPROFILE = `${BASE_URL}users/UpdateUserProfile`;
export const UPDATECOMPANYPROFILE = `${BASE_URL}users/UpdateCompanyProfile`;
export const FORGOTPASSWORD = `${BASE_URL}users/forgotpassword`;
export const GETALLSPACES = `${BASE_URL}spaces`;


export const INVITEMANAGER = `${BASE_URL}users/manager-invitation`;


export const GETUSERSPACES = id => `${BASE_URL}spaces/space/${id}`;

export const CREATEBOOKING = `${BASE_URL}bookings/create_booking`;
export const ALLBOOKING = id => `${BASE_URL}bookings/user_bookings/${id}`;

export const GETCONVERSATION = id => `${BASE_URL}conversations/${id}`;
export const CONVERSATIONMESSAGE = id => `${BASE_URL}messages/${id}`;

// export const ADDVEHICLE =  `${BASE_URL}vehicle/add_vehicle`;
// export const ADDVEHICLE =  `${BASE_URL}vehicle/add_vehicle`;

export const UPLOAD_IMAGE = userId => `${BASE_URL}students/${userId}/image`;

export const GET_STATE = country => `${BASE_URL}country?country=${country}`;
export const GET_CITY = state => `${BASE_URL}country?state=${state}`;
