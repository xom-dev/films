import { POST_SESSION_ERROR, POST_SESSION_REQUEST } from './constants';

export const postSessionRequest = (userInfo) => ({
  type: POST_SESSION_REQUEST,
  payload: userInfo
});

export const postSessionError = (error) => ({
  type: POST_SESSION_ERROR,
  payload: error
});
