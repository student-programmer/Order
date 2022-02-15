import React from 'react';
import Loadable from 'react-loadable';
import './assets/TermsAndConditions.scss';

const TermsAndConditionsOfUseContainer = Loadable({
  loader: () => import('./containers/TermsAndConditionsOfUseContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

export default {
    component: TermsAndConditionsOfUseContainer
}