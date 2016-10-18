/*!
 * Description: The Redux store module
 *
 * Redux manages state through a single JavaScript object, known as a data store,
 * where all of your application's state is located. Centralizing state in a single
 * object makes it easier to reason about application data when you're reading code.
 * Also, when all your data is in one place, your application is easier to debug and test.
 * Storing application state in a single object makes it easier to persist the
 * entire state of your application.
 *
 * With Redux, you can't modify application state. Instead, you replace the existing
 * state with a new state. The new state is specified by actions, which are (also immutable)
 * JavaScript objects that describe state changes.
 *
 * Encapsulation of state changes in immutable objects has many advantages.
 * One of those advantages, as you'll see in this series, is the ability to implement
 * endless undo and redo — in effect, a sort of time machine. Actions are also executed in
 * a strict order, so no race conditions occur.
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

export default createStore(reducers, compose(applyMiddleware(logger, thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f));
