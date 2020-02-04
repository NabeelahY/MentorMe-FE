import {
  FETCH_QUESTIONS_LOADING,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE
} from '../actions/questions';

const initialState = {
  questions: [],
  error: '',
  loading: false
};

export const questionsReducer = (state = initialState, action) => {
  switch (action.types) {
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
    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
