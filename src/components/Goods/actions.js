/**
 * Created by vitaliy on 30.12.16.
 */
import { bindActionCreators } from 'redux';

export const GET_GOODS = 'Goods/GET_GOODS';
export const RECEIVED_GOODS = 'Goods/RECEIVED_GOODS';

export const getGoods = () => ({ type : GET_GOODS });
export const receivedGoods = (goods) => ({ type : RECEIVED_GOODS, payload : goods });

export const containerActions = (dispatch) => bindActionCreators({
  getGoods, receivedGoods
}, dispatch);
