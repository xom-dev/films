import { SignUpSagaWatcher } from './SignUp/services/saga';
import { SignInSagaWatcher } from './SignIn/services/saga';

export const loginModuleSaga = [SignInSagaWatcher, SignUpSagaWatcher];
