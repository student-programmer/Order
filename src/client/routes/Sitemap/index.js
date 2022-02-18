import React from 'react';
import Loadable from 'react-loadable';

import './assets/SitemapView.scss'

const SitemapContainer = Loadable({
  loader: () => import('./containers/SitemapContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

export default {
    component: SitemapContainer
}