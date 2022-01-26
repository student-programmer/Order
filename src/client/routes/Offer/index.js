import React from 'react';
import Loadable from 'react-loadable';

import './assets/OfferView.scss'

const OfferContainer = Loadable({
  loader: () => import('./containers/OfferContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

export default {
    component: OfferContainer
}