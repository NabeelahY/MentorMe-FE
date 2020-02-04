import { combineReducers } from 'redux';
import authReducer from './auth';
import { questionsReducer } from './questions';

const rootReducer = combineReducers({
  authReducer,
  questionsReducer
});

export default rootReducer;
