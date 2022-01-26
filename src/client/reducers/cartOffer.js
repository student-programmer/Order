import { GET_CART_OFFERS } from '../actions/getCartOffers';

export default (state = false, action) => {
  switch (action.type) {
    case GET_CART_OFFERS:
      return action.payload;

    default:
      return state;
  }
}