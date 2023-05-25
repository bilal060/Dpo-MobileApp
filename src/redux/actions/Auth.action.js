import AUTH from '../constants/Auth.constant';
import {
  handleError,
  handleSuccess,
  post,
  get,
  patch,
} from '../../utils/methods';
import {TOKEN} from '../../utils/asyncStorage/Constants';
import {useNavigation} from '@react-navigation/native';

import {
  _setDataToAsyncStorage,
  getTokenAndSetIntoHeaders,
  getValueIntoAsyncStorage,
  getValueIntoLocalStorage,
  removeUserDetail,
} from '../../utils/asyncStorage/Functions';
import {FORGOTPASSWORD, LOGIN, OTPVERIFY, REGISTER, UPDATEPROFILE} from '../../config/webservices';

export const login = (payload, CB) => async dispatch => {
  console.log('🚀 ~ file: Auth.action.js ~ line 17 ~ login ~ payload', payload);

  // dispatch({ type: AUTH.LOGIN_USER_API, loading: false,});

  dispatch({type: AUTH.LOGIN_USER_API, loading: true, });

  try {
    let response = await post(LOGIN, payload);
    console.log(
      '🚀 ~ file: Auth.action.js:56 ~ registerOwner ~ response:',
      response?.data,
    );
    if (response?.data?.error) {
      dispatch({type: AUTH.LOGIN_USER_API, loading: false});
      handleError(response?.data?.data?.message || '');
    } else {
      await _setDataToAsyncStorage(TOKEN, response?.data?.data?.token);
      await getTokenAndSetIntoHeaders(response?.data?.data?.token);
      dispatch({
        type: AUTH.LOGIN_USER_API,
        loading: false,
        user: response?.data?.data?.user,
        // role: payload?.role,
        isLoggedIn: true,
      });
      // handleSuccess(response?.data?.message);
    }
    CB && CB(response?.data);
  } catch (error) {
    console.table('🚀 ~ file: Auth.action.js ~ line 42 ~ login ~ error', error);

    handleError(error?.data?.error, {autoHide: false});
    dispatch({type: AUTH.LOGIN_USER_API, loading: false});
  }
};

export const registerOwner = (payload, CB) => async dispatch => {
  console.log("🚀 ~ file: Auth.action.js:51 ~ registerOwner ~ payload:", payload)
  dispatch({type: AUTH.REGISTER_OWNER_API, loading: true});

  try {
    let response = await post(REGISTER, payload);
    console.log("🚀 ~ file: Auth.action.js:64 ~ registerOwner ~ response:", response)
    
    if (response?.data?.error) {
      dispatch({type: AUTH.REGISTER_OWNER_API, loading: false , role: payload?.role});
      handleError(response?.data?.data?.message || '');
    } else {
  
      dispatch({
        type: AUTH.REGISTER_OWNER_API,
        loading: false,
        role: payload?.role
      });
      handleSuccess(response?.data?.message);
    }
    CB && CB(response?.data);
  } catch (error) {
    console.log("🚀 ~ file: Auth.action.js:71 ~ registerOwner ~ error:", error)
    handleError(error?.data?.data?.message, {autoHide: false});
    dispatch({type: AUTH.REGISTER_OWNER_API, loading: false});
  }
};

export const verifyOTP = (payload, CB) => async dispatch => {
  dispatch({type: AUTH.VERIFY_OWNER_API, loading: true});

  try {
    let response = await post(OTPVERIFY, payload);
    console.log(
      '🚀 ~ file: Auth.action.js:56 ~ registerOwner ~ response:',
      response?.data?.data
    );
    if (response?.data?.error) {
      dispatch({type: AUTH.VERIFY_OWNER_API, loading: false});
      handleError(response?.data?.data?.message || '');
    } else {
      await _setDataToAsyncStorage(TOKEN, response?.data?.token);
      await getTokenAndSetIntoHeaders(response?.data?.token);
      dispatch({
        type: AUTH.VERIFY_OWNER_API,
        loading: false,
        user: response?.data?.data?.user,
        // role: payload?.role,

        // isLoggedIn: true,
      });
      handleSuccess(response?.data?.message);
    }
    CB && CB(response?.data);
  } catch (error) {
    console.table('🚀 ~ file: Auth.action.js ~ line 42 ~ login ~ error', error);

    handleError(error?.data?.error, {autoHide: false});
    dispatch({type: AUTH.VERIFY_OWNER_API, loading: false});
  }
};

export const updateUserProfile = (payload, CB) => async dispatch => {
   const token = await getValueIntoAsyncStorage(TOKEN)
   console.log("🚀 ~ file: Auth.action.js:112 ~ updateUserProfile ~ token:", token)
   getTokenAndSetIntoHeaders(token)
  dispatch({type: AUTH.UPDATE_USERPROFILE_API, loading: true});
  const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
    },
  };
  try {
    let response = await patch(UPDATEPROFILE, payload, config);
   
    if (response?.data?.error) {
      dispatch({type: AUTH.UPDATE_USERPROFILE_API, loading: false});
      handleError(response?.data?.data?.message || '');
    } else {
    
      dispatch({
        type: AUTH.UPDATE_USERPROFILE_API,
        loading: false,
        user: response?.data?.data?.user,
        // isLoggedIn: true,
      });
      handleSuccess(response?.data?.message);
    }
    CB && CB(response?.data);
  } catch (error) {
    console.table('🚀 ~ file: Auth.action.js ~ line 42 ~ login ~ errordddddddd', error);

    handleError(error?.data?.error, {autoHide: false});
    dispatch({type: AUTH.UPDATE_USERPROFILE_API, loading: false});
  }
};


export const forgotPass = (payload, CB) => async dispatch => {
    dispatch({type: AUTH.FORGOT_PASS, loading: true});
  
    try {
      let response = await post(FORGOTPASSWORD, payload);
      console.log(
        '🚀 ~ file: Auth.action.js:56 ~ registerOwner ~ response:',
        response?.data,
      );
      if (response?.data?.error) {
        dispatch({type: AUTH.FORGOT_PASS, loading: false});
        handleError(response?.data?.data?.message || '');
      } else {
       
        dispatch({
          type: AUTH.FORGOT_PASS,
          loading: false,
        //   user: response?.data?.data?.user,
        //   role: payload?.role,
  
          // isLoggedIn: true,
        });
        handleSuccess(response?.data?.message);
      }
      CB && CB(response?.data);
    } catch (error) {
      console.table('🚀 ~ file: Auth.action.js ~ line 42 ~ login ~ error', error);
  
      handleError(error?.data?.error, {autoHide: false});
      dispatch({type: AUTH.FORGOT_PASS, loading: false});
    }
  };
  