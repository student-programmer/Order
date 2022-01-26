import React from 'react';
import Loadable from 'react-loadable';

import './assets/VpnView.scss'

const VpnContainer = Loadable({
  loader: () => import('./containers/VpnContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

export default {
    component: VpnContainer
}