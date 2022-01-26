import { combineReducers } from 'redux';
import cartOffer from './cartOffer';
import user from './user';

export default combineReducers({
    getCartOffers : cartOffer,
    getUser       : user
});
