import { POST_USER_ERROR, POST_USER_REQUEST, POST_USER_SUCCESS } from './constants';

export const postUserRequest = (userInfo) => ({
  type: POST_USER_REQUEST,
  payload: userInfo
});

export const postUserSuccess = (token) => ({
  type: POST_USER_SUCCESS,
  payload: token
});

export const postUserError = (error) => ({
  type: POST_USER_ERROR,
  payload: error
});
