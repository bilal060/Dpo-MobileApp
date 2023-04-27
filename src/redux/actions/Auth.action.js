import AUTH from "../constants/Auth.constant";
import { handleError, handleSuccess, post, get } from "../../utils/methods";
import { TOKEN } from "../../utils/asyncStorage/Constants";
import { useNavigation } from "@react-navigation/native";

import {
    _setDataToAsyncStorage,
    getTokenAndSetIntoHeaders,
    getValueIntoLocalStorage,
    removeUserDetail,
} from "../../utils/asyncStorage/Functions";


export const login = (payload, CB) => async (dispatch) => {
    
    console.log(
        "🚀 ~ file: Auth.action.js ~ line 17 ~ login ~ payload",
        payload
    );

    // dispatch({ type: AUTH.LOGIN_USER_API, loading: false,});
    
    dispatch({ type: AUTH.LOGIN_USER_API, loading: true, isLoggedIn: true});

    try {
        // let response = await post(LOGIN, payload);
        // if (response?.data?.error) {
        //     dispatch({ type: AUTH.LOGIN_USER_API, loading: false });
        //     handleError(response?.data?.data?.message || "");
        // } else {
        //     await _setDataToAsyncStorage(TOKEN, response?.data?.data?.token);
        //     await getTokenAndSetIntoHeaders(response?.data?.data?.token);
        //     dispatch({
        //         type: AUTH.LOGIN_USER_API,
        //         loading: false,
        //         user: response?.data,
        //         isLoggedIn: true,
        //     });
        // }
       
    } catch (error) {
        console.log("🚀 ~ file: Auth.action.js ~ line 42 ~ login ~ error", error)
        handleError(error?.data?.error, { autoHide: false });
        dispatch({ type: AUTH.LOGIN_USER_API, loading: false });
       
    }
};