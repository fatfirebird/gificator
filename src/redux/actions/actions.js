import { LOAD } from './actionTypes';

export const loadFile = (url, type) => ({
  type: LOAD,
  payload: {
    url,
    type
  }
})