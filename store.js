/*!
 * Description: The Redux store module
 *
 *
 * GENERAL
 * Redux manages state through a single JavaScript object, known as a data store,
 * where all of the application's state is located. Centralizing state in a single
 * object makes it easier to reason about application data when reading code.
 * Also, when all data is in one place, the application is easier to debug and test.
 *
 * Storing application state in a single object makes it easier to persist the entire
 * state of the application.
 *
 * STORE
 * The state object för this application will contain;
 * - books, array of books in json format.
 * - topic, string containing the topic to search when pressing enter.
 * - currentStatus, string describing the status of the app
 * - displayMode, string, THUMBNAIL or LIST
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import { logger, thunk } from './middleware';

/**
 * Create the Redux store by calling Redux.createStore().
 */
export default createStore(reducers, compose(applyMiddleware(logger, thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f));
