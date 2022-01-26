import React from 'react';
import Loadable from 'react-loadable';

import './assets/ContactUsView.scss'

const ContactUsContainer = Loadable({
  loader: () => import('./containers/ContactUsContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

export default {
    component: ContactUsContainer
}