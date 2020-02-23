import axios from 'axios';
import { apiURL } from '../config';
// import { axiosWithAuth } from '../utils/axiosInstance';

export const FETCH_QUESTIONS_LOADING = 'FETCH_QUESTIONS_LOADING';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_FAILURE = 'FETCH_QUESTIONS_FAILURE';
export const FETCH_TAGS_SUCCESS = 'FETCH_TAGS_SUCCESS';

export const getQuestions = () => async dispatch => {
  dispatch({ type: FETCH_QUESTIONS_LOADING });
  try {
    let questions = await axios.get(`${apiURL}/api/questions`);
    dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: questions.data });
  } catch (error) {
    dispatch({
      type: FETCH_QUESTIONS_FAILURE,
      payload: error.response?.data.message
    });
  }
};

export const getTags = () => async dispatch => {
  dispatch({ type: FETCH_QUESTIONS_LOADING });
  try {
    let tags = await axios.get(`${apiURL}/api/tags`);
    dispatch({ type: FETCH_TAGS_SUCCESS, payload: tags.data });
  } catch (error) {
    dispatch({
      type: FETCH_QUESTIONS_FAILURE,
      payload: error.response?.data.message
    });
  }
};
