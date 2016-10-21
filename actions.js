/*!
 * Description: Module for the applications action creators
 *
 * Action creators might seem like a circuitous way to come up with an action object. It would be simpler to
 * specify the actions directly. However, implementing action creators typically in one file, or a handful of files,
 * makes it easy to locate the code for your application's actions, which in effect serves as a form of documentation.
 *
 * NOTE:
 * fetchCurrentTopic() is invoked by the thunk middleware implemented in ./middleware.js. That middleware calls
 * fetchCurrentTopic() and passes it the dispatch and state.
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */

// GOOGLE API endpoint
const URL = 'https://www.googleapis.com/books/v1/volumes?q=';


/**
 * Helper function for fetch start
 * @returns {{type: string}}
 */
const fetchStart = () => {
  return {
    type: 'FETCH_STARTED',
  }
};

/**
 * Helper function for fetch complete status
 * @param json
 * @returns {{type: string, json: *}}
 */
const fetchComplete = (json) => {
  return {
    type: 'FETCH_COMPLETE',
    json
  }
};

/**
 * Helper function for fetch failed status
 * @param error
 * @returns {{type: string, error: *}}
 */
const fetchFailed = (error) => {
  return {
    type: 'FETCH_FAILED',
    error
  }
};

/**
 * Function that is called from the thunk middleware
 * @param dispatch
 * @param state
 */
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

/**
 * Module interface method to fetch books
 * @returns {{type: string, fn: (function(*, *))}}
 */
const fetchBooks = () => {
  return {
    type: 'BEGIN_FETCH',
    fn: fetchCurrentTopic
  }
};

/**
 * Module interface function to set topic
 * @param topic
 * @returns {{type: string, topic: *}}
 */
const setTopic = topic => {
  return {
    type: 'SET_TOPIC',
    topic
  }
};

/**
 * Module interface function to set display mode
 * @param displayMode
 * @returns {{type: string, displayMode: *}}
 */
const setDisplayMode = displayMode => {
  return {
    type: 'SET_DISPLAY_MODE',
    displayMode
  }
};

/**
 * Module interface function to redo
 * @returns {{type: string}}
 */
const redo = () => {
  return {
    type: 'REDO'
  }
};

/**
 * Module interface function to undo
 * @returns {{type: string}}
 */
const undo = () => {
  return {
    type: 'UNDO'
  }
};

/**
 * Module interface function to goto state
 * @param stateIndex
 * @returns {{type: string, stateIndex: *}}
 */
const gotoState = stateIndex => {
  return {
    type: 'GOTO',
    stateIndex
  }
};


/**
 * Export the modules interface functions.
 */
export { fetchBooks, setTopic, setDisplayMode, redo, undo, gotoState }