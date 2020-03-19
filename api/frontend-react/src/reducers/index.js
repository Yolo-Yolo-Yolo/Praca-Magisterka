import { combineReducers } from 'redux';
import InformationReducer from './InformationReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';


export default combineReducers({
    item: InformationReducer,
    error: errorReducer,
    auth: authReducer
});