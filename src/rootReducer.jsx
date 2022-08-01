import { combineReducers } from 'redux';
import { movieModuleReducer } from './components/MovieList/moduleReducer';
import { uploadModuleReducer } from './common/ImportFile/moduleReducer';
import { loginModuleReducer } from './components/Login/moduleReducer';

const rootReducer = combineReducers({
  movieModuleReducer,
  loginModuleReducer,
  uploadModuleReducer
});

export default rootReducer;
