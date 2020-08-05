import { combineReducers } from 'redux';
import InformationReducer from './InformationReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import allusersReducer from './allusersReducer';

export default combineReducers({
    allusers: allusersReducer,
    item: InformationReducer,
    error: errorReducer,
    auth: authReducer
});