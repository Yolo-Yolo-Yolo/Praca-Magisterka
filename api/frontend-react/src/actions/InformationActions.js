import axios from 'axios';
import {GET_INFORMATIONS, ADD_INFORMATION, DELETE_INFORMATION, INFORMATION_LOADING } from './types';

export const getInformations = () => dispatch => {
    dispatch(setInformationLoading());
    axios
    .get('/information')
    .then( res =>
        dispatch({
            type: GET_INFORMATIONS,
            payload: res.data
        })
        )
};

export const deleteInformation = (id) => dispatch => {
    axios
    .delete(`/information/${id}`)
    .then(res => dispatch({
        type: DELETE_INFORMATION,
        payload: id
    }))
};

export const addInformation = item => dispatch => {
    axios
    .post('/information', item)
    .then(res => dispatch({
        type: ADD_INFORMATION,
        payload: res.data
    })
    )
};

export const setInformationLoading = () => {
    return {
        type: INFORMATION_LOADING
    }
}