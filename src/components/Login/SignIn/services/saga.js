import { call, put, takeLatest } from 'redux-saga/effects';
import { POST_SESSION_REQUEST } from './constants';
import { postSessionError } from './actions';
import { LoginService } from '../../../../entities/login/service';

function* postSessionSaga(action) {
  try {
    const body = action.payload;
    const response = yield call(LoginService.postSession, body);
    window.sessionStorage.setItem('token', response.token);
  } catch (error) {
    yield put(postSessionError(error.errorExtraParams));
  }
}

export function* SignInSagaWatcher() {
  yield takeLatest(POST_SESSION_REQUEST, postSessionSaga);
}
