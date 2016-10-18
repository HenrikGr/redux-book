/*!
 * Description: The application module for this playground.
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/app';
import store from './store';
import { fetchBooks, setTopic } from './actions';

store.dispatch(setTopic('border collies'));
store.dispatch(fetchBooks());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('example')
);
