export const GET_CART_OFFERS = 'fetchCartOffers';

import {
    addToCart
} from '../api_test/cart'

export const fetchCartOffers = value => async dispatch => {
    for(let k in value) {
        let id = value[k]['id']
        let q = value[k]['quantity']

        for(let key in value) {

           if (k == key) continue

           let cid = value[key]['id']
           let cq = value[k]['quantity']

           if (id == cid) {
                q = q+cq

                delete value[k]
           }
       }
    }

    addToCart(value)

    dispatch({
        type    : GET_CART_OFFERS,
        payload : value
    });
};


