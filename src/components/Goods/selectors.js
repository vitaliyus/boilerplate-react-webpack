/**
 * Created by vitaliy on 30.12.16.
 */
import { createStructuredSelector } from 'reselect';

export const modelSelector = createStructuredSelector({
  goods: state => {
    console.log('Selectors ', state.goodsContainer.goods);
    return state.goodsContainer.goods;
  }
});
