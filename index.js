/*!
 * Description: Module for the application entry point
 *
 * This module renders the App component which is wrapped inside a Redux Provider component.
 * The Provider component makes the Redux store available to the application and all descendant components.
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */

// Module dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import the app container component
import App from './containers/app';

// Import the store component
import store from './store';

// Import actions
import { fetchBooks, setTopic } from './actions';

// Set default topic and fetch the via the API
store.dispatch(setTopic('border collies'));
store.dispatch(fetchBooks());

// Render the app.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('example')
);
