import { combineReducers } from 'redux';
import InformationReducer from './InformationReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import allusersReducer from './allusersReducer';
import reservationhoursReducer from './reservationhoursReducer';
import reservationsReducer from './reservationsReducer';

export default combineReducers({
    allusers: allusersReducer,
    item: InformationReducer,
    error: errorReducer,
    auth: authReducer,
    reservationhours: reservationhoursReducer,
    reservations: reservationsReducer,
});