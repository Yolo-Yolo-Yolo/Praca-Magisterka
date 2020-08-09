import {
    GET_RESERVATION_HOURS,
    GET_MY_RESERVATION_HOURS,
    ADD_RESERVATION_HOURS,
    DELETE_RESERVATION_HOURS,
    RESERVATION_HOURS_LOADING
  } from "../actions/types";

  const initialState = {
    reservationhours: [],
    loading: false
  }


  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_RESERVATION_HOURS:
        return {
          ...state,
          reservationhours: action.payload,
          loading: false
        };
      case GET_MY_RESERVATION_HOURS:
        return {
          ...state,
          reservationhours: action.payload,
          loading: false
        };
      case DELETE_RESERVATION_HOURS:
        return {
          ...state,
          reservationhours: state.reservationhours.filter(reservationhours => reservationhours._id !== action.payload)
        };
      case ADD_RESERVATION_HOURS:
        return {
          ...state,
          reservationhours: [action.payload, ...state.reservationhours]
        };
      case RESERVATION_HOURS_LOADING:
        return {
          ...state,
          loading: true
      };
        default:
      return state;
  }
}