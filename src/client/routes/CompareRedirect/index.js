import React from 'react';
import Loadable from 'react-loadable';


const CompareContainer = Loadable({
  loader: () => import('./containers/CompareContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

export default {
    component: CompareContainer
}