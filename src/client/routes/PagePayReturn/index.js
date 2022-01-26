import React from 'react';
import Loadable from 'react-loadable';

const PagePayReturnContainer = Loadable({
  loader: () => import('./containers/PagePayReturnContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

export default {
    component: PagePayReturnContainer
}