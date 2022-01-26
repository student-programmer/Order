import React from 'react';
import Loadable from 'react-loadable';

import './assets/HomeView.scss'

const HomeContainer = Loadable({
  loader: () => import('./containers/HomeContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

export default {
    component: HomeContainer
}