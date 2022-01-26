import React from 'react';
import Loadable from 'react-loadable';

import './assets/VendorView.scss'

const VendorContainer = Loadable({
  loader: () => import('./containers/VendorContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

export default {
    component: VendorContainer
}