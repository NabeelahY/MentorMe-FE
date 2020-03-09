import {
  FETCH_QUESTIONS_LOADING,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTION_SUCCESS,
  FETCH_TAGS_SUCCESS,
  POST_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  POST_QUESTIONS_FAILURE,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTIONS_FAILURE
} from '../actions/questions';

const initialState = {
  questions: [],
  question: {},
  tags: [],
  error: '',
  loading: false
};

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload,
        loading: false
      };
    case FETCH_QUESTION_SUCCESS:
      return {
        ...state,
        question: action.payload,
        loading: false
      };
    case FETCH_TAGS_SUCCESS:
      return {
        ...state,
        tags: action.payload,
        loading: false
      };
    case POST_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: [action.payload, ...state.questions],
        loading: false
      };
    case DELETE_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: state.questions.filter(q => q.id !== action.payload.id)
      };
    case POST_QUESTIONS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case DELETE_QUESTIONS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
