import AUTH from '../constants/Auth.constant';

const initialState = {
  isLoggedIn: false,
  registerLoading: false,
  verifyLoading: false,
  forgitPassLoading: false,
  updateUserLoading: false,
  user: {},
  role: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case AUTH.LOGIN_USER_API:
      return {
        ...state,
        loginLoading: action.loading,
        isLoggedIn: action.isLoggedIn,
        user: action.user,
      };
    case AUTH.REGISTER_OWNER_API:
      return {
        ...state,
        registerLoading: action.loading,
        role: action.role,
      };
    case AUTH.UPDATE_USERPROFILE_API:
      return {
        ...state,
        updateUserLoading: action.loading,
        role: action.role,
      };
    case AUTH.LOGOUT_USER_API:
      return {...state, isLoggedIn: action.isLoggedIn, user: action.user};
    case AUTH.VERIFY_OWNER_API:
      return {
        ...state,
        verifyLoading: action.loading,
        user: action.user,
      };
    case AUTH.FORGOT_PASS:
      return {
        ...state,
        forgitPassLoading: action.loading,
      };
    default:
      return {...state};
  }
};
 