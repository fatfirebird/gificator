import { combineReducers } from "redux";
import fileReducer from './fileReducer';
import errorReducer from './errorReducer';
import methodReducer from './methodReducer';

export default combineReducers({
  file: fileReducer,
  error: errorReducer,
  method: methodReducer,
})