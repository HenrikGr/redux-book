/*!
 * Description: Module for the application entry point
 *
 * We are using react-redux bidning package which gives us access to an API that includes a component and a method:
 * - Provider component provides access to the Redux store for components contained in the Provider component.
 * - void connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options]) function connects a
 *   React presentation component to the Redux store.
 *
 * The Provider component is a convenience so you don't need to manually pass the store as a property throughout your
 * component hierarchy. Components that you nest inside the Provider component automatically have access to the
 * Redux store.
 *
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
