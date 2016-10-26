/*!
 * Description: Module for the application entry point
 *
 * The application dispatches two actions, created by the setTopic() and
 * setDisplayMode() action creator functions to set the initial state to
 * javascript and call fetchTopic which will perform a fetch using the topic
 * value from the state.
 *
 * The Provider component, part of the react-redux bindings, makes all of its
 * properties available to any components inside the Provider tag body, in this case,
 * a single property: the Redux store.
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

// Import material-ui components
import hgcTheme from './theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap, http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Import the app container component
import App from './containers/app';

// Import the store component
import store from './store';

// Import actions creator functions
import { fetchBooks, setTopic } from './actions';

// Dispatch the action setTopic, created by the setTopic()
// action creator function to set the initial state (topic)
// to javascript.
store.dispatch(setTopic('javascript'));

// Dispatch the action fetchBooks, created the fetchBooks()
// action creator function which perform a fetch based on
// topic set in the state (javascript).
store.dispatch(fetchBooks());

// Render the app.
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(hgcTheme)}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
