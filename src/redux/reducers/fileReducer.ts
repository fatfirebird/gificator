import { ActionsTypes } from './../actions/actions';
import { LOAD, ADD_PARAMS, SHOW_LOADER, REMOVE_FILE } from '../actions/actionTypes';

export type initialStateType = {
  type: null | string;
  width: number;
  height: number;
  duration: number;
  url: string;
  isLoading: boolean;
}

const initialState: initialStateType = {
  type: null,
  width: 0,
  height: 0,
  duration: 0,
  url: '',
  isLoading: false,
}

export default (state = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case LOAD:
      const { type, url } = action.payload
      return {
        ...state,
        isLoading: false,
        type,
        url
      }
    
    case ADD_PARAMS: 
      const { width, height, duration } = action.payload
      return {
        ...state,
        width,
        height,
        duration
      }

    case SHOW_LOADER: 
      return {
        ...state, 
        url: '', 
        isLoading: true
      }
    
    case REMOVE_FILE:
      return initialState

    default:
      return state
  }
}