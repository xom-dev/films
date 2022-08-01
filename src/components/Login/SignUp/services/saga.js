import { call, put, takeLatest } from 'redux-saga/effects';
import { POST_USER_REQUEST } from './constants';
import { postUserError, postUserSuccess } from './actions';
import { LoginService } from '../../../../entities/login/service';

function* postUserSaga(action) {
  try {
    const body = action.payload;
    const response = yield call(LoginService.postUser, body);
    window.sessionStorage.setItem('token', response.token);
    yield put(postUserSuccess(response));
  } catch (error) {
    yield put(postUserError(error.errorExtraParams));
  }
}

export function* SignUpSagaWatcher() {
  yield takeLatest(POST_USER_REQUEST, postUserSaga);
}
