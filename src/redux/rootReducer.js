import auth from "./reducers/Auth.reducer";
import global from "./reducers/Global.reducer";
import language from './reducers/Language.reducer'


import {combineReducers} from 'redux';


export default combineReducers({
    auth,
    global,
    language
    
});
