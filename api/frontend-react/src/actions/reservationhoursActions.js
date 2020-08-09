import axios from "axios";
import {
    GET_RESERVATION_HOURS,
    GET_MY_RESERVATION_HOURS,
    ADD_RESERVATION_HOURS,
    DELETE_RESERVATION_HOURS,
    RESERVATION_HOURS_LOADING
} from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getReservationHours = () => dispatch => {
    dispatch(setReservationHoursLoading());
    axios
      .get("/reservationshours/hours")
      .then(res =>
        dispatch({
          type: GET_RESERVATION_HOURS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  export const getMyReservationHours = do_kogo => dispatch => {
    dispatch(setReservationHoursLoading());
    axios
      .get(`/reservationshours/hours/${do_kogo}`)
      .then(res =>
        dispatch({
          type: GET_MY_RESERVATION_HOURS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  export const deleteReservationHours = id => (dispatch, getState) => {
    axios.delete(`/reservationshours/hours/${id}`, tokenConfig(getState)).then(res =>
      dispatch({
        type: DELETE_RESERVATION_HOURS,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
  };
  
  export const addReservationHours = item => (dispatch, getState) => {
    axios.post("/reservationshours/hours", item, tokenConfig(getState)).then(res =>
      dispatch({
        type: ADD_RESERVATION_HOURS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
  };

  export const setReservationHoursLoading = () => {
    return {
      type: RESERVATION_HOURS_LOADING
    };
  };