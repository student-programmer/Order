import React from 'react';
import Loadable from 'react-loadable';

const PrivacyPolicyContainer = Loadable({
  loader: () => import('./containers/PrivacyPolicyContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

export default {
    component: PrivacyPolicyContainer
}