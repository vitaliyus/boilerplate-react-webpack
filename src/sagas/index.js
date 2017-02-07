/**
 * Created by vitaliy on 30.12.16.
 */
import { fork } from 'redux-saga/effects';
import goodsSaga from '../components/Goods/sagas';

export default function* mainSaga() {
  yield fork(goodsSaga);
}
