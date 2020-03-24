import { LOAD } from '../actions/actionTypes.js';

const initialState = {
  type: null,
  url: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const { type, url } = action.payload
      return {
        type,
        url
      }
    
    default:
      return state
  }
}