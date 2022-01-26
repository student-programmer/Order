import React from 'react';
import Loadable from 'react-loadable';

import './assets/CompareView.scss'

const CompareContainer = Loadable({
  loader: () => import('./containers/CompareContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

export default {
    component: CompareContainer
}