import { POST_UPLOAD_FILE_REQUEST } from './constants';

const initialState = {
  token: '',
  error: null
};

export const UploadFileReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_UPLOAD_FILE_REQUEST: {
      return {
        ...state,
        token: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
