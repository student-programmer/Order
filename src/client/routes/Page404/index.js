import React from 'react';
import Loadable from 'react-loadable';

const Page404Container = Loadable({
  loader: () => import('./containers/Page404Container'),
  loading() {
    return <div>Loading...</div>
  }
});

export default {
    component: Page404Container
}