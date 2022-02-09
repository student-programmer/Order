import React from 'react';
import Loadable from 'react-loadable';

import './assets/QuestionView.scss'

const QuestionContainer = Loadable({
  loader: () => import('./containers/QuestionContainer'),
  loading() {
    return <div>Loading...</div>
  }
});

export default {
    component: QuestionContainer
}