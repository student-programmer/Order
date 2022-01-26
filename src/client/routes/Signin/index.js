import React from 'react';
import Loadable from 'react-loadable';

import './assets/SigninView.scss'

const SigninContainer = Loadable({
  loader: () => import('./containers/SigninContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

export default {
    component: SigninContainer
}