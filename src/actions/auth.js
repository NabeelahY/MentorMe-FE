import axios from 'axios';
import { apiURL } from '../config';
import { setToken } from '../utils/localStorage';

export const AUTH_LOADING = 'AUTH_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const logIn = user => dispatch => {
  dispatch({ type: AUTH_LOADING });
  return axios
    .post(`${apiURL}/api/auth/login`, user)
    .then(res => {
      setToken(res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
    })
    .catch(err => {
      dispatch({ type: AUTH_FAILURE, payload: err.response?.data.message });
    });
};
