/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state/store';
import Svg from './Svg';
import '../public/app.css'; // use a basic global fallback stylesheet

ReactDOM.render(
  <Provider store={store}>
    <h1>Hello friend!</h1>
    <Svg />
  </Provider>,
  document.getElementById('app'),
);
