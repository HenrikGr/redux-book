/*!
 * Description: Module for the applications action creators
 *
 * GENERAL
 * Action creators might seem like a circuitous way to come up with an action object.
 * It would be simpler to specify the actions directly. However, implementing action
 * creators typically in one file, or a handful of files, makes it easy to locate the
 * code for your application's actions, which in effect serves as a form of documentation.
 *
 * Encapsulate the creation of actions in functions, making your code more readable.
 *
 * ACTIONS
 * With Redux, we can't modify application state. Instead, we replace the existing
 * state with a new state. The new state is specified by actions, which are immutable
 * objects that describe state changes.
 *
 * Encapsulation of state changes in immutable objects has many advantages.
 * One of those advantages, is the ability to implement endless undo and redo
 * functionality, in effect, a sort of time machine.
 *
 * Actions are also executed in a strict order, so no race conditions occur.
 *
 *
 * NOTE:
 * fetchCurrentTopic() is invoked by the thunk middleware implemented in ./middleware.js.
 * That middleware calls fetchCurrentTopic() and passes it the dispatch and state.
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */

// GOOGLE API endpoint
const URL = 'https://www.googleapis.com/books/v1/volumes?q=';


const fetchStart = () => ({
  type: 'FETCH_STARTED',
});

const fetchComplete = (json) => ({
  type: 'FETCH_COMPLETE',
  json,
});

const fetchFailed = (error) => ({
  type: 'FETCH_FAILED',
  error,
});

const fetchCurrentTopic = (dispatch, state) => {
  dispatch(fetchStart());

  fetch(URL + state.topic)
    .then(res => res.json())
    .then(json => {
      if (json.error) {
        dispatch(fetchFailed(json.error));
      } else {
        dispatch(fetchComplete(json));
      }
    })
    .catch((json) => {
      dispatch(fetchFailed(json.error));
    });
};

const fetchBooks = () => ({
  type: 'BEGIN_FETCH',
  fn: fetchCurrentTopic,
});

const setTopic = (topic) => ({
  type: 'SET_TOPIC',
  topic,
});

const setDisplayMode = (displayMode) => ({
  type: 'SET_DISPLAY_MODE',
  displayMode,
});

const redo = () => ({
  type: 'REDO',
});

const undo = () => ({
  type: 'UNDO',
});

const gotoState = (stateIndex) => ({
  type: 'GOTO',
  stateIndex,
});


/**
 * Export the modules action creator functions
 */
export { fetchBooks, setTopic, setDisplayMode, redo, undo, gotoState };
