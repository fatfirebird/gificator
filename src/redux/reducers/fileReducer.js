import { LOAD, ADD_PARAMS, SHOW_LOADER, REMOVE_FILE } from '../actions/actionTypes.js';

const initialState = {
  type: null,
  width: 0,
  height: 0,
  duration: 0,
  url: null,
}

export default (state = initialState, action) => {
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
        url: null, 
        isLoading: true
      }
    
    case REMOVE_FILE:
      return initialState

    default:
      return state
  }
}