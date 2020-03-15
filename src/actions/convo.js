// import axios from 'axios';
import { apiURL } from '../config';
import { axiosWithAuth } from '../utils/axiosInstance';

export const FETCH_CONVO_LOADING = 'FETCH_CONVO_LOADING';
export const FETCH_CONVO_SUCCESS = 'FETCH_CONVO_SUCCESS';
export const FETCH_MSG_SUCCESS = 'FETCH_MSG_SUCCESS';
export const FETCH_CONVO_FAILURE = 'FETCH_CONVO_FAILURE';
export const RESET_CONVO = 'RESET_CONVO';

export const getQuesConvo = id => async dispatch => {
  dispatch({ type: FETCH_CONVO_LOADING });
  try {
    let convo = await axiosWithAuth().get(
      `${apiURL}/api/conversations?qid=${id}`
    );
    dispatch({ type: FETCH_CONVO_SUCCESS, payload: convo.data });
  } catch (error) {
    dispatch({
      type: FETCH_CONVO_FAILURE,
      payload: error.response?.data.message
    });
  }
};

export const getConvo = id => async dispatch => {
  dispatch({ type: FETCH_CONVO_LOADING });
  try {
    let msgs = await axiosWithAuth().get(`${apiURL}/api/conversations/${id}`);
    dispatch({ type: FETCH_MSG_SUCCESS, payload: msgs.data });
  } catch (error) {
    dispatch({
      type: FETCH_CONVO_FAILURE,
      payload: error.response?.data.message
    });
  }
};

export const resetConvo = () => async dispatch => {
  dispatch({ type: RESET_CONVO });
};
