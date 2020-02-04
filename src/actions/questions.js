import { apiURL } from '../config';
import { axiosWithAuth } from '../utils/axiosInstance';

export const FETCH_QUESTIONS_LOADING = 'FETCH_QUESTIONS_LOADING';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_FAILURE = 'FETCH_QUESTIONS_FAILURE';

export const getQuestions = () => async dispatch => {
  dispatch({ type: FETCH_QUESTIONS_LOADING });
  try {
    let questions = await axiosWithAuth.get(`${apiURL}/api/questions`);
    dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: questions });
  } catch (error) {
    dispatch({
      type: FETCH_QUESTIONS_FAILURE,
      payload: error.response?.data.message
    });
  }
};
