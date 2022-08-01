import { combineReducers } from 'redux';
import { SignUpReducer } from './SignUp/services/reducer';
import { SignInReducer } from './SignIn/services/reducer';

export const loginModuleReducer = combineReducers({
  SignUpReducer,
  SignInReducer
});
