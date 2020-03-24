import { combineReducers } from "redux";
import fileReducer from './fileReducer.js';


export default combineReducers({file: fileReducer})