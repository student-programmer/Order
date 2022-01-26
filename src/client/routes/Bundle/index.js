import React from 'react';
import Loadable from 'react-loadable';

import './assets/BundleView.scss'

const BundleContainer = Loadable({
  loader: () => import('./containers/BundleContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

export default {
    component: BundleContainer
}