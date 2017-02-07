/*
* Goods2 Actions
*
* This contains all the text for the Goods2 component.
*/
import { fork, take, put } from 'redux-saga/effects';
import * as actions from './actions.js';
import { makeRequest } from '../../api/serverApi';
import { GOODS_URL } from '../../api/serverUrls';

function* getGoods() {
  const always = true;

  while (always) {
    yield take(actions.GET_GOODS);
    const result = yield makeRequest(GOODS_URL, 'GET');

    yield put(actions.receivedGoods(result));
  }
}

export default function* mainSaga() {
  yield [ fork(getGoods) ];
}
