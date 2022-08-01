import { call, put, takeLatest } from 'redux-saga/effects';
import { DELETE_FILM_REQUEST, GET_FILM_LIST_REQUEST } from './constants';
import { deleteFilmError, deleteFilmSuccess, getFilmListError, getFilmListSuccess, setFilms } from './actions';
import { MovieService } from '../../../entities/movie/service';

function* getMovieSaga() {
  try {
    const response = yield call(MovieService.getMovies);
    yield put(getFilmListSuccess(response.data));
  } catch (error) {
    yield put(getFilmListError(error.errorExtraParams));
  }
}

function* deleteFilmSaga(action) {
  try {
    const { id, movies } = action.payload;
    const response = yield call(MovieService.deleteFilm, id);
    yield put(deleteFilmSuccess(response));
    yield put(setFilms(movies));
  } catch (error) {
    yield put(deleteFilmError(error.errorExtraParams));
  }
}

export function* MovieSagaWatcher() {
  yield takeLatest(GET_FILM_LIST_REQUEST, getMovieSaga);
  yield takeLatest(DELETE_FILM_REQUEST, deleteFilmSaga);
}
