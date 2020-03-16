import { combineReducers } from 'redux';
import authReducer from './auth';
import questionsReducer from './questions';
import convoReducer from './convo';
import userReducer from './user';

const rootReducer = combineReducers({
  authReducer,
  questionsReducer,
  convoReducer,
  userReducer
});

export default rootReducer;
