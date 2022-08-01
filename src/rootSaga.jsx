import { all, fork } from 'redux-saga/effects';
import { movieModuleSaga } from './components/MovieList/moduleSaga';
import { fileModuleSaga } from './common/ImportFile/moduleSaga';
import { loginModuleSaga } from './components/Login/moduleSaga';

const sagas = [...movieModuleSaga, ...loginModuleSaga, ...fileModuleSaga];

export default function* rootSaga() {
  const globalSagasForks = sagas.map((saga) => fork(saga));
  yield all([...globalSagasForks]);
}
