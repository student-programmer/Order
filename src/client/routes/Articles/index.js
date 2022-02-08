import React from 'react';
import Loadable from 'react-loadable';

import './assets/ArticlesView.scss'

const ArticlesContainer = Loadable({
  loader: () => import('./containers/ArticlesContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

export default {
    component: ArticlesContainer
}