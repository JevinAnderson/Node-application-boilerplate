import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import { Application, createStore } from '../../app/application';

const initialState = _initialState;
const node = document.getElementById('application');
const store = createStore(initialState);
render(
  <Provider store={store} >
    <Application />
  </Provider>,
  node
);
