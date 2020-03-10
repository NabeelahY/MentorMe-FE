import axios from 'axios';
import { apiURL } from '../config';
import { axiosWithAuth } from '../utils/axiosInstance';

export const FETCH_CONVO_LOADING = 'FETCH_CONVO_LOADING';
export const FETCH_CONVO_SUCCESS = 'FETCH_CONVO_SUCCESS';
export const FETCH_CONVO_FAILURE = 'FETCH_CONVO_FAILURE';

export const getConvo = id => async dispatch => {
  dispatch({ type: FETCH_CONVO_LOADING });
  try {
    let convo = await axiosWithAuth().get(`${apiURL}/api/conversations?qid=${id}`);
    dispatch({ type: FETCH_CONVO_SUCCESS, payload: convo.data });
  } catch (error) {
    dispatch({
      type: FETCH_CONVO_FAILURE,
      payload: error.response?.data.message
    });
  }
};
