import axios from 'axios';
import { apiURL } from '../config';
import { decodeToken } from '../utils/checkToken';
// import { axiosWithAuth } from '../utils/axiosInstance';

export const FETCH_QUESTIONS_LOADING = 'FETCH_QUESTIONS_LOADING';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const  FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS'
export const POST_QUESTIONS_SUCCESS = 'POST_QUESTIONS_SUCCESS';
export const DELETE_QUESTION_SUCCESS = 'DELETE_QUESTION_SUCCESS';
export const FETCH_TAGS_SUCCESS = 'FETCH_TAGS_SUCCESS';
export const FETCH_QUESTIONS_FAILURE = 'FETCH_QUESTIONS_FAILURE';
export const POST_QUESTIONS_FAILURE = 'POST_QUESTIONS_FAILURE';
export const DELETE_QUESTIONS_FAILURE = 'DELETE_QUESTIONS_FAILURE';

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


export const getQuestion = id => async dispatch => {
  dispatch({ type: FETCH_QUESTIONS_LOADING });
  try {
    let question = await axios.get(`${apiURL}/api/questions/${id}`);
    dispatch({ type: FETCH_QUESTION_SUCCESS, payload: question.data });
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

export const postQuestions = question => dispatch => {
  dispatch({ type: FETCH_QUESTIONS_LOADING });
  let user = decodeToken();
  question.author_id = user.subject;
  return axios
    .post(`${apiURL}/api/questions`, question)
    .then(res => {
      dispatch({ type: POST_QUESTIONS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: POST_QUESTIONS_FAILURE,
        payload: err.response?.data.message
      });
    });
};

export const deleteQuestion = id => dispatch => {
  dispatch({ type: FETCH_QUESTIONS_LOADING });
  return axios
    .delete(`${apiURL}/api/questions/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_QUESTION_SUCCESS,
        payload: { message: res.data, id }
      });
    })
    .catch(err => {
      dispatch({
        type: DELETE_QUESTIONS_FAILURE,
        payload: err.response?.data.message
      });
    });
};
