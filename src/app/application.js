import React, { Component, PropTypes } from 'react';

import Application from './containers/index';
import createStore from './store';

const ApplicationData = {
  Application,
  createStore
}

if (typeof module !== 'undefined') {
  module.exports = ApplicationData;
} else {
  exports.ApplicationData = ApplicationData;
}
