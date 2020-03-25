import { SET_METHOD } from '../actions/actionTypes.js';

export default (state = null, action) => {
  switch (action.type) {
    case SET_METHOD:
      return action.payload

    default:
      return state
  }
}