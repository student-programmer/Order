import React from 'react';
import Loadable from 'react-loadable';

import './assets/AccountView.scss'

const AccountContainer = Loadable({
  loader: () => import('./containers/AccountContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

export default {
    component: AccountContainer
}