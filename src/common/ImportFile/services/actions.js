import { POST_UPLOAD_FILE_ERROR, POST_UPLOAD_FILE_REQUEST, POST_UPLOAD_FILE_SUCCESS } from './constants';

export const postFileRequest = (formData) => ({
  type: POST_UPLOAD_FILE_REQUEST,
  payload: formData
});

export const postFileSuccess = () => ({
  type: POST_UPLOAD_FILE_SUCCESS
});

export const postFileError = (error) => ({
  type: POST_UPLOAD_FILE_ERROR,
  payload: error
});
