import { combineReducers } from 'redux';
import authReduxer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
export default combineReducers({
  auth: authReduxer,
  errors: errorReducer,
  profile: profileReducer
});
