import { POST_USER_SUCCESS } from './constants';

const initialState = {
  token: '',
  error: null
};

export const SignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER_SUCCESS: {
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
