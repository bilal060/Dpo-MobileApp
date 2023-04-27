import AUTH from "../constants/Auth.constant";

const initialState = {
   
    isLoggedIn: false,
    user: {},
    

};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case AUTH.LOGIN_USER_API:
            return {
                ...state,
                loginLoading: action.loading,
                isLoggedIn: action.isLoggedIn,
                user: action.user
            };

      
    
        default:
            return state;
    }
};
