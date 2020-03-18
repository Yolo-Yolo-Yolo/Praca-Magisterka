//import uuid from 'react-uuid';
import {
  GET_INFORMATIONS,
  ADD_INFORMATION,
  DELETE_INFORMATION,
  INFORMATION_LOADING
} from "../actions/types";

const initialState = {
  items: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INFORMATIONS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case DELETE_INFORMATION:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case ADD_INFORMATION:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case INFORMATION_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
