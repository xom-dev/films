import {
  DELETE_FILM_ERROR,
  DELETE_FILM_REQUEST,
  DELETE_FILM_SUCCESS,
  GET_FILM_LIST_ERROR,
  GET_FILM_LIST_REQUEST,
  GET_FILM_LIST_SUCCESS,
  SET_FILMS
} from './constants';

export const getFilmListRequest = () => ({
  type: GET_FILM_LIST_REQUEST
});

export const getFilmListSuccess = (movies) => ({
  type: GET_FILM_LIST_SUCCESS,
  payload: movies
});

export const getFilmListError = (error) => ({
  type: GET_FILM_LIST_ERROR,
  payload: error
});

export const deleteFilmRequest = ({ id, movies }) => ({
  type: DELETE_FILM_REQUEST,
  payload: { id, movies }
});

export const deleteFilmSuccess = (movies) => ({
  type: DELETE_FILM_SUCCESS,
  payload: movies
});

export const deleteFilmError = (error) => ({
  type: DELETE_FILM_ERROR,
  payload: error
});

export const setFilms = (films) => ({
  type: SET_FILMS,
  payload: films
});
