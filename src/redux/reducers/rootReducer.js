import { combineReducers } from "redux";
import fileReducer from './fileReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  file: fileReducer,
  error: errorReducer,
})