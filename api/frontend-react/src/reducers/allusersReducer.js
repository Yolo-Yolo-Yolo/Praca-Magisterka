import {
    ALL_USERS_LOADING,
    ALL_USERS_LOADED,
    USER_DELETE,
    ADD_ADMIN,
    REMOVE_ADMIN,
    CHANGE_ROLE
  } from "../actions/types";

  const initialState = {
    allusers: [],
    loading: false
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case ALL_USERS_LOADED:
        return {
          ...state,
          allusers: action.payload,
          loading: false
        };
      case USER_DELETE:
        return {
          ...state,
          allusers: state.allusers.filter(allusers => allusers._id !== action.payload)
        };
      case ADD_ADMIN:
        return {
          ...state,
          //allusers: state.allusers.filter(allusers => allusers._id !== action.payload)
        };
      case CHANGE_ROLE:
        return {
          ...state,
          //allusers: state.allusers.filter(allusers => allusers._id !== action.payload)
        };
      case REMOVE_ADMIN:
        return {
          ...state,
          //allusers: state.allusers.filter(allusers => allusers._id !== action.payload)
        };
      case ALL_USERS_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }