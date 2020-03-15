import { combineReducers } from 'redux';
import authReducer from './auth';
import questionsReducer from './questions';
import convoReducer from './convo';

const rootReducer = combineReducers({
  authReducer,
  questionsReducer,
  convoReducer
});

export default rootReducer;
