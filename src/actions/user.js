import axios from 'axios';
import { apiURL } from '../config';
import { decodeToken } from '../utils/checkToken';

export const FETCH_USER_LOADING = 'FETCH_USER_LOADING';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const getUser = () => async dispatch => {
  dispatch({ type: FETCH_USER_LOADING });
  let { subject } = decodeToken();
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
