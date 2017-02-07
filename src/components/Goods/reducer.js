/**
 * Created by vitaliy on 30.12.16.
 */
import * as actions from './actions.js';

const initialState = {};

export default (state = initialState, action = {}) => {
  const { type, payload } = action;

  if (type === actions.RECEIVED_GOODS) {
    console.log('Goods ', payload); // {goods : '...'}
    return Object.assign({}, state, { goods : payload.goods });
  }

  return state;
};
