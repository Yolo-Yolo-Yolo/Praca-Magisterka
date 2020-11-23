import { GET_SUCCESS, CLEAR_SUCCESS } from "./types";


export const returnSuccess = (msg2, status, id = null) => {
  return {
    type: GET_SUCCESS,
    payload: { msg2, status, id }
  };
};


export const clearSuccess = () => {
  return {
    type: CLEAR_SUCCESS
  };
};
