import { 
  LOAD, 
  TYPE_ERROR, 
  UNKNOWN_ERROR, 
  HIDE_ALERT,
  SET_METHOD
} from './actionTypes';

const hide = dispatch => {
  setTimeout(() => {
    dispatch(hideAlert())
  }, 3000)
}

export const loadFile = (url, type) => ({
  type: LOAD,
  payload: {
    url,
    type
  }
})

export const sendTypeError = () => {
  return dispatch => {
    dispatch({
      type: TYPE_ERROR
    })

    hide(dispatch)
  }
}

export const sendUnknownError = () => {
  return dispatch => {
    dispatch({
      type: UNKNOWN_ERROR
    })

    hide(dispatch)
  }
}

export const hideAlert = () => ({
  type: HIDE_ALERT
})

export const setMethod = format => ({
  type: SET_METHOD,
  payload: format
})