/*!
 * Description:
 *
 * GENERAL
 * Reducers are pure JavaScript functions that:
 * - Create a new state, given the current state and an action
 * - Centralize data mutations
 * - Can act on all or part of the state
 * - Can be combined and reused
 *
 * Because they're pure functions, reducers have no side effects,
 * so they're easy to read, test, and debug. And you can compose reducers,
 * which makes it easy to implement simple reducers that are concerned
 * with only a portion of the overall application state.
 *
 * Redux is a predictable state container: Given any state and any action,
 * you can predict the next state of the application with absolute certainty.
 *
 * That predictable element of Redux is the killer feature that opens the
 * door to infinite undo/redo and live-editing time travel.
 *
 * If you send an action to a reducer, and the reducer isn't interested —
 * for instance, you send a SET_DISPLAY_MODE action to the topic reducer —
 * the reducer returns the current state, unchanged.
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
// Module dependencies
import { combineReducers } from 'redux';

// Import stateHistory object
import stateHistory from './statehistory';

// Default state
const defaults = {
  STATUS: 'Starting the application',
  TOPIC: 'javascript',
  DISPLAY_MODE: 'THUMBNAIL',
  STATE: [],
};

const fetchReducer = (state = defaults.STATE, action) => {
  switch (action.type) {
    case 'FETCH_STARTED':
      return [];

    case 'FETCH_FAILED':
      alert('Fetch failed. Check your internet connection or change the query.');
      return [];

    case 'FETCH_COMPLETE':
      return action.json.items;

    default:
      return state;
  }
};

const statusReducer = (state = defaults.STATUS, action) => {
  switch (action.type) {
    case 'FETCH_STARTED':
      return 'Fetching...';

    case 'FETCH_COMPLETE':
      return 'Fetch complete';

    case 'FETCH_FAILED':
      return 'Fetch failed ' + (action.error ? action.error : '');

    case 'SET_TOPIC':
      return 'Set topic to ' + action.topic;

    case 'SET_DISPLAY_MODE':
      return 'Set display mode to ' + action.displayMode;

    default:
      return state;
  }
};

const topicReducer = (state = defaults.TOPIC, action) => {
  switch (action.type) {
    case 'SET_TOPIC':
      return action.topic;

    default:
      return state;
  }
};

const bookDisplayReducer = (state = defaults.DISPLAY_MODE, action) => {
  switch (action.type) {
    case 'SET_DISPLAY_MODE':
      return action.displayMode;

    default:
      return state;
  }
};

const undo = reducer => (state = stateHistory.present, action) => {
  switch (action.type) {
    case 'UNDO':
      stateHistory.undo();
      break;

    case 'REDO': {
      stateHistory.redo();
      break;
    }
    case 'GOTO': {
      stateHistory.gotoState(action.stateIndex);
      break;
    }
    default: {
      const newState = reducer(state, action);
      stateHistory.push(newState);
    }
  }

  return stateHistory.present;
};

// Combine reducers
export default undo(combineReducers({
  books: fetchReducer,
  topic: topicReducer,
  currentStatus: statusReducer,
  displayMode: bookDisplayReducer,
}));
