import { GET_FILM_LIST_SUCCESS, SET_FILMS } from './constants';

const initialState = {
  movies: [],
  error: null
};

export const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILM_LIST_SUCCESS: {
      return {
        ...state,
        movies: action.payload
      };
    }
    case SET_FILMS: {
      return {
        ...state,
        movies: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
