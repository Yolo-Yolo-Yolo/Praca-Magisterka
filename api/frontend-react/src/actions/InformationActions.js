import axios from "axios";
import {
  GET_INFORMATIONS,
  ADD_INFORMATION,
  DELETE_INFORMATION,
  INFORMATION_LOADING
} from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getInformations = () => dispatch => {
  dispatch(setInformationLoading());
  axios
    .get("/information")
    .then(res =>
      dispatch({
        type: GET_INFORMATIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteInformation = id => (dispatch, getState) => {
  axios.delete(`/information/${id}`, tokenConfig(getState)).then(res =>
    dispatch({
      type: DELETE_INFORMATION,
      payload: id
    })
  )
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
};

export const addInformation = item => (dispatch, getState) => {
  axios.post("/information", item, tokenConfig(getState)).then(res =>
    dispatch({
      type: ADD_INFORMATION,
      payload: res.data
    })
  )
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
};

export const setInformationLoading = () => {
  return {
    type: INFORMATION_LOADING
  };
};
