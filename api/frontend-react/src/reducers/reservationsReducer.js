import {
    GET_RESERVATIONS,
    GET_MY_RESERVATIONS,
    ADD_RESERVATION,
    DELETE_RESERVATION,
    RESERVATIONS_LOADING,
    UPDATE_RESERVATION
  } from "../actions/types";

  const initialState = {
    reservations: [],
    loading: false
  }


  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_RESERVATIONS:
        return {
          ...state,
          reservations: action.payload,
          loading: false
        };
      case GET_MY_RESERVATIONS:
        return {
          ...state,
          reservations: action.payload,
          loading: false
        };
      case DELETE_RESERVATION:
        return {
          ...state,
          reservations: state.reservations.filter(reservations => reservations._id !== action.payload)
        };
      case ADD_RESERVATION:
        return {
          ...state,
          reservations: [action.payload, ...state.reservations]
        };
      case RESERVATIONS_LOADING:
        return {
          ...state,
          loading: true
      };
      case UPDATE_RESERVATION:
          return {
            ...state,
            reservations: action.payload,
            loading: false
          };
        default:
      return state;
  }
}