import React from 'react';
import Loadable from 'react-loadable';

import './assets/NewsView.scss'

const NewsContainer = Loadable({
  loader: () => import('./containers/NewsContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

export default {
    component: NewsContainer
}