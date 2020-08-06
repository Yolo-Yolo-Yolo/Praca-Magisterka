import axios from "axios";
import {
    ALL_USERS_LOADING,
    ALL_USERS_LOADED,
    USER_DELETE,
    ADD_ADMIN,
    REMOVE_ADMIN,
    CHANGE_ROLE
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

export const AddAdmin = id => (dispatch, getState) => {
  axios.post(`/users/upgrade/${id}`, tokenConfig(getState)).then(res =>
    dispatch({
      type: ADD_ADMIN,
      payload: id
    })
  )
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
};

export const RemoveAdmin = id => (dispatch, getState) => {
  axios.post(`/users/downgrade/${id}`, tokenConfig(getState)).then(res =>
    dispatch({
      type: REMOVE_ADMIN,
      payload: id
    })
  )
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
};

//Changing roles

export const ChangeRoletoUser = id => (dispatch, getState) => {
  axios.post(`/users/upgraderole/user/${id}`, tokenConfig(getState)).then(res =>
    dispatch({
      type: CHANGE_ROLE,
      payload: id
    })
  )
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
};
export const ChangeRoletoDSNauki = id => (dispatch, getState) => {
  axios.post(`/users/upgraderole/dsnauki/${id}`, tokenConfig(getState)).then(res =>
    dispatch({
      type: CHANGE_ROLE,
      payload: id
    })
  )
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
};
export const ChangeRoletoDSKsztalcenia = id => (dispatch, getState) => {
  axios.post(`/users/upgraderole/dsksztalcenia/${id}`, tokenConfig(getState)).then(res =>
    dispatch({
      type: CHANGE_ROLE,
      payload: id
    })
  )
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
};
export const ChangeRoletoDSStudenckich = id => (dispatch, getState) => {
  axios.post(`/users/upgraderole/dsstudenckich/${id}`, tokenConfig(getState)).then(res =>
    dispatch({
      type: CHANGE_ROLE,
      payload: id
    })
  )
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
};
export const ChangeRoletoDSOgolnych = id => (dispatch, getState) => {
  axios.post(`/users/upgraderole/dsogolnych/${id}`, tokenConfig(getState)).then(res =>
    dispatch({
      type: CHANGE_ROLE,
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