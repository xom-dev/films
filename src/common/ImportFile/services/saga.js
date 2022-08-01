import { call, put, takeLatest } from 'redux-saga/effects';
import { POST_UPLOAD_FILE_REQUEST } from './constants';
import { postFileError, postFileSuccess } from './actions';
import { LoginService } from '../../../entities/login/service';

function* postFileSaga(action) {
  try {
    const body = action.payload;
    console.log(body);
    const response = yield call(LoginService.postFile, body);
    yield put(postFileSuccess(response));
  } catch (error) {
    yield put(postFileError(error.errorExtraParams));
  }
}

export function* FileSagaWatcher() {
  yield takeLatest(POST_UPLOAD_FILE_REQUEST, postFileSaga);
}
