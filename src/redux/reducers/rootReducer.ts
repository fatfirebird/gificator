import { combineReducers } from "redux";
import fileReducer from './fileReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  file: fileReducer,
  error: errorReducer,
});

type rootReducerType = typeof rootReducer;
export type AppState = ReturnType<rootReducerType>;

export default rootReducer;