import axios from 'axios';
import { apiURL } from '../config';
import { decodeToken } from '../utils/checkToken';

export const FETCH_USER_LOADING = 'FETCH_USER_LOADING';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const FETCH_USER_CONVO_SUCCESS = 'FETCH_USER_CONVO_SUCCESS';

export const getUser = () => async dispatch => {
  let { subject } = decodeToken();
  dispatch({ type: FETCH_USER_LOADING });
  try {
    let user = await axios.get(`${apiURL}/api/user/${subject}`);
    dispatch({ type: FETCH_USER_SUCCESS, payload: user.data });
  } catch (error) {
    dispatch({
      type: FETCH_USER_FAILURE,
      payload: error.response?.data.message
    });
  }
};

export const editUser = user => dispatch => {
  let { subject } = decodeToken();
  dispatch({ type: FETCH_USER_LOADING });
  return axios
    .put(`${apiURL}/api/user/${subject}`, user)
    .then(res => {
      dispatch({ type: EDIT_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCH_USER_FAILURE,
        payload: err.response?.data.message
      });
    });
};

export const getUserConvo = () => async dispatch => {
  let { subject } = decodeToken();
  dispatch({ type: FETCH_USER_LOADING });
  try {
    let convos = await axios.get(`${apiURL}/api/conversations/user/${subject}`);
    dispatch({ type: FETCH_USER_CONVO_SUCCESS, payload: convos.data });
  } catch (error) {
    dispatch({
      type: FETCH_USER_FAILURE,
      payload: error.response?.data.message
    });
  }
};
