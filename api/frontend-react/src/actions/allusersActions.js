import axios from "axios";
import {
    ALL_USERS_LOADING,
    ALL_USERS_LOADED,
    USER_DELETE
} from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";


export const getAllUsers = () => (dispatch, getState) => {
    dispatch(setAllUsersLoading());
    axios
      .get("/users/getall", tokenConfig(getState))
      .then(res =>
        dispatch({
          type: ALL_USERS_LOADED,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };


export const deleteUser = id => (dispatch, getState) => {
  axios.delete(`/users/delete/${id}`, tokenConfig(getState)).then(res =>
    dispatch({
      type: USER_DELETE,
      payload: id
    })
  )
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
};

export const setAllUsersLoading = () => {
  return {
    type: ALL_USERS_LOADING
  };
};