import axios from "axios";
import {
    GET_RESERVATIONS,
    GET_MY_RESERVATIONS,
    ADD_RESERVATION,
    DELETE_RESERVATION,
    RESERVATIONS_LOADING,
    UPDATE_RESERVATION
} from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getReservations = () => (dispatch, getState) => {
    dispatch(setReservationsLoading());
    axios
      .get("/reservations/all", tokenConfig(getState))
      .then(res =>
        dispatch({
          type: GET_RESERVATIONS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  export const getMyReservations = album => dispatch => {
    dispatch(setReservationsLoading());
    axios
      .get(`/reservations/${album}`)
      .then(res =>
        dispatch({
          type: GET_MY_RESERVATIONS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };

  export const getReservationInfo = id_terminu => dispatch => {
    dispatch(setReservationsLoading());
    axios
      .get(`/reservations/find/${id_terminu}`)
      .then(res =>
        dispatch({
          type: GET_MY_RESERVATIONS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  export const deleteReservation = id => (dispatch, getState) => {
    axios.delete(`/reservations/delete/${id}`, tokenConfig(getState)).then(res =>
      dispatch({
        type: DELETE_RESERVATION,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
  };
  
  export const addReservation = item => (dispatch, getState) => {
    axios.post("/reservations/new", item, tokenConfig(getState)).then(res =>
      dispatch({
        type: ADD_RESERVATION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
  };

  export const setReservationsLoading = () => {
    return {
      type: RESERVATIONS_LOADING
    };
  };

  export const ConfirmReservation = id => (dispatch, getState) => {
    axios.post(`/reservations/confirm/${id}`, tokenConfig(getState)).then(res =>
      dispatch({
        type: UPDATE_RESERVATION,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
  };