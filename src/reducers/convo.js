import {
  FETCH_CONVO_LOADING,
  FETCH_CONVO_SUCCESS,
  FETCH_CONVO_FAILURE
} from '../actions/convo';

const initialState = {
  convo: [],
  error: '',
  loading: false
};

const convoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONVO_LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_CONVO_SUCCESS:
      return {
        ...state,
        loading: false,
        convo: action.payload
      };
    case FETCH_CONVO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default convoReducer;
