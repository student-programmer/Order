import React from 'react';
import Loadable from 'react-loadable';

import './assets/CompareVendorsView.scss'

const CompareVendorsContainer = Loadable({
    loader: () => import('./containers/CompareVendorsContainer'),
    loading() {
        return <div>Loading...</div>
    }
});

export default {
    component: CompareVendorsContainer
}