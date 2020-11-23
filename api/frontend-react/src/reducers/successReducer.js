import {GET_SUCCESS, CLEAR_SUCCESS} from '../actions/types';


const initialState = {
    msg2: {},
    status: null,
    id: null
}


export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SUCCESS:
            return {
                msg2: action.payload.msg2,
                status: action.payload.status,
                id: action.payload.id
            };
        case CLEAR_SUCCESS:
            return {
                msg2: {},
                status: null,
                id: null
            };
        default:
            return state;
    }
}