import {
  FETCH_USER_LOADING,
  FETCH_USER_SUCCESS,
  EDIT_USER_SUCCESS,
  FETCH_USER_CONVO_SUCCESS,
  FETCH_USER_FAILURE
} from '../actions/user';

const initialState = {
  user: {},
  convos: [],
  error: '',
  loading: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_LOADING:
      return {
        ...state,
        error: '',
        loading: true
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        user: action.payload
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        user: action.payload
      };
    case FETCH_USER_CONVO_SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        convos: action.payload
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default userReducer;
