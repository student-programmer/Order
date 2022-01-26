import React from 'react';
import Loadable from 'react-loadable';

import './assets/CheckoutView.scss'

const CheckoutContainer = Loadable({
  loader: () => import('./containers/CheckoutContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

export default {
    component: CheckoutContainer
}