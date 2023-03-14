import { CLEAR_CART, CLEAR_ORDER, CREATE_ORDER } from '../types';

export const createOrder = (order) => (dispatch) => {
  fetch('/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: CREATE_ORDER, payload: data });
      //   Dispatching this action, we need to clean the shopping cart, a local storage locale, a storage carrier,
      localStorage.clear('cartItems');
      // Clear cart action to clear a path item.So it should be another dispatch, but this time the type is clear.
      dispatch({ type: CLEAR_CART });
    });
};

export const clearOrder = () => (dispatch) => {
  dispatch({ type: CLEAR_ORDER });
};
