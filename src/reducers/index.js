/**
 * Created by vitaliy on 16.12.16.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import goodsContainerReducer from '../components/Goods/reducer';

const reducer = combineReducers({
  goodsContainer: goodsContainerReducer,
  routing : routerReducer
});

export default reducer;
