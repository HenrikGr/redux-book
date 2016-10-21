/*!
 * Description: The Redux store module
 *
 * Redux manages state through a single JavaScript object, known as a data store,
 * where all of the application's state is located. Centralizing state in a single
 * object makes it easier to reason about application data when reading code.
 * Also, when all data is in one place, the application is easier to debug and test.
 *
 * Storing application state in a single object makes it easier to persist the entire
 * state of the application.
 *
 * With Redux, we can't modify application state. Instead, we replace the existing state
 * with a new state. The new state is specified by actions, which are (also immutable)
 * JavaScript objects that describe state changes.
 *
 * Encapsulation of state changes in immutable objects has many advantages.
 * One of those advantages, is the ability to implement endless undo and redo
  * — in effect, a sort of time machine.
  *
 * Actions are also executed in a strict order, so no race conditions occur.
 *
 *
 *
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
 *
 *
 *
 *
 */
export default createStore(reducers, compose(applyMiddleware(logger, thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f));
