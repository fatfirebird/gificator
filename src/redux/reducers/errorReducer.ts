import { UNKNOWN_ERROR, TYPE_ERROR, HIDE_ALERT } from '../actions/actionTypes'
import { ActionsTypes } from '../actions/actions'

export type initialStateType = {
  isError: boolean;
  message: null | string;
}

const initialState: initialStateType = {
  isError: false,
  message: null
}

export default (state = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case TYPE_ERROR:
      return {
        isError: true,
        message: 'Invalid file type, you can upload only .gif, .mp4 or .webm'
      }
  
    case UNKNOWN_ERROR: 
      return {
        isError: true,
        message: 'Something goes wrong...'
      }

    case HIDE_ALERT: 
      return initialState

    default:
      return state
  }
}