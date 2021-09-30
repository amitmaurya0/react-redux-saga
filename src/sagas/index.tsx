import { all } from 'redux-saga/effects';
import { deplymentSaga } from './DeploymentSaga';

export default function* rootSaga() {
  yield all([
  ...deplymentSaga,
  ]);
}