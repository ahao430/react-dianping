import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import RouteMap from './router';
import './static/css/common.less';

const store = configureStore();

render(
  <Provider store={store}>
    <RouteMap />
  </Provider>,
  document.getElementById('root')
);
