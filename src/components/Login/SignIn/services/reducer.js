import { POST_SESSION_ERROR } from './constants';

const initialState = {
  token: '',
  error: null
};

export const SignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SESSION_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
