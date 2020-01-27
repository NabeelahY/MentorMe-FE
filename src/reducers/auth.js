import { AUTH_FAILURE, AUTH_LOADING, LOGIN_SUCCESS } from '../actions/auth';

const initialState = {
  user: null,
  error: '',
  loading: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        error: '',
        loading: true
      };
    case AUTH_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        user: {
          ...action.payload
        }
      };
    default:
      return state;
  }
};

export default authReducer;
