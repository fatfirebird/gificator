import { 
  LOAD, 
  TYPE_ERROR, 
  UNKNOWN_ERROR, 
  HIDE_ALERT,
  ADD_PARAMS,
  SHOW_LOADER,
  REMOVE_FILE
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

export const showLoader = () => {
  return dispatch => {
    dispatch({
      type: SHOW_LOADER
    })
  }
}

export const addVideoParams = (width, height, duration) => ({
  type: ADD_PARAMS,
  payload: {
    width,
    height,
    duration
  }
})

export const removeFile = () => ({
  type: REMOVE_FILE
})