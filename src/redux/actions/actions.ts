import { Dispatch } from 'redux';
import { 
  LOAD, 
  TYPE_ERROR, 
  UNKNOWN_ERROR, 
  HIDE_ALERT,
  ADD_PARAMS,
  SHOW_LOADER,
  REMOVE_FILE
} from './actionTypes';

export type ActionsTypes = hideAlertType | sendTypeErrorType | sendUnknownErrorType | hideAlertType | 
                           loadFileType | addVideoParamsType | removeFileType | showLoaderType


/* Error actions */
const hide = (dispatch: Dispatch<ActionsTypes>) => {
  setTimeout(() => {
    dispatch(hideAlert())
  }, 3000)
}

type sendTypeErrorType = {
  type: typeof TYPE_ERROR // 'TYPE_ERROR'
}

export const sendTypeError = () => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    dispatch({
      type: TYPE_ERROR
    })

    hide(dispatch)
  }
}

type sendUnknownErrorType = {
  type: typeof UNKNOWN_ERROR // 'UNKNOWN_ERROR'
}

export const sendUnknownError = () => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    dispatch({
      type: UNKNOWN_ERROR
    })

    hide(dispatch)
  }
}

type hideAlertType = {
  type: typeof HIDE_ALERT // 'HIDE_ALERT'
}

export const hideAlert = (): hideAlertType => ({
  type: HIDE_ALERT
})


/* File actions */
type loadFilePayloadType = {
  url: string,
  type: string
}

type loadFileType = {
  type: typeof LOAD; // 'LOAD'
  payload: loadFilePayloadType;
}

export const loadFile = (url: string, type: string): loadFileType => ({
  type: LOAD,
  payload: {
    url,
    type
  }
})

type showLoaderType = {
  type: typeof SHOW_LOADER // 'SHOW_LOADER'
}

export const showLoader = () => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    dispatch({
      type: SHOW_LOADER
    })
  }
}

type addVideoParamsPayloadType = {
  width: number;
  height: number;
  duration: number;
}

type addVideoParamsType = {
  type: typeof ADD_PARAMS; // 'ADD_PARAMS'
  payload: addVideoParamsPayloadType;
}

export const addVideoParams = (width: number, height: number, duration: number): addVideoParamsType => ({
  type: ADD_PARAMS,
  payload: {
    width,
    height,
    duration
  }
})

type removeFileType = {
  type: typeof REMOVE_FILE // 'REMOVE_FILE'
}

export const removeFile = (): removeFileType => ({
  type: REMOVE_FILE
})