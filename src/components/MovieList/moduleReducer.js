import { combineReducers } from 'redux';
import { MoviesReducer } from './services/reducer';

export const movieModuleReducer = combineReducers({
  MoviesReducer
});
