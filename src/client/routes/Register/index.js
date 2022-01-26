import React from 'react';
import Loadable from 'react-loadable';

import './assets/RegisterView.scss'

const RegisterContainer = Loadable({
  loader: () => import('./containers/RegisterContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

export default {
    component: RegisterContainer
}