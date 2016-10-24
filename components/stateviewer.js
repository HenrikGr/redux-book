/*!
 * Description: StateViewer component.
 *
 * The StateViewer component will render the application state which is located
 * in Redux store.
 * 
 * The app component hierarchy looks like this:
 *
 * App
 *  - ControlsContainer
 *   - TopicSelectorContainer
 *    - TopicSelector (*)
 *   - DisplayModeContainer
 *    - DisplayMode
 *   - HistoryContainer
 *    - History
 *  - BooksContainer
 *   - Book
 *   - Book
 *   - ...
 *  - StateViewerContainer
 *   - StateViewer (*)
 *
 * The component gets props from the StateViewerContainer component;
 * - books, array of books,
 * - topic, string of search term,
 * - currentStatus, string displaying the state status,
 * - displayMode, string containing the text the user entered
 * - history, state history.
 *
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
import React from 'react';

/**
 * StateView stateless function component
 * @param topic
 * @param books
 * @param currentStatus
 * @param displayMode
 * @param history
 * @returns {XML}
 * @constructor
 */
const StateViewer = ({topic,books,currentStatus,displayMode,history}) => {
  const styles = {
    container: {
      margin: '20px',
      width: '400px',
      fontFamily: 'tahoma',
    },
    title: {
      fontSize: '24px',
      marginTop: '25px',
    },
    state: {
      marginTop: '10px',
    },
    hr: {
      marginTop: '50px',
    },
  };

  return (
    <div style={styles.container}>
      <hr style={styles.hr} />

      <div style={styles.title}>
        Application State
      </div>

      <div style={styles.state}>
        Topic: {topic}<br />

        Display mode:      { displayMode }<br />
        Current status:    { currentStatus }<br />
        Books displayed:   { books.length }<br />
        Actions processed: { history.past.length + history.future.length + 1 }<br />
        Current action:    { history.past.length + 1 }
      </div>
    </div>
  );
};

/**
 * Property definitions for the component
 * @type {{books: *, currentStatus: *, displayMode: *, history: *, topic: *}}
 */
StateViewer.propTypes = {
  books: React.PropTypes.array.isRequired,
  currentStatus: React.PropTypes.string.isRequired,
  displayMode: React.PropTypes.string.isRequired,
  history: React.PropTypes.object.isRequired,
  topic: React.PropTypes.string.isRequired,
};

/**
 * Export the StateViewer component
 */
export default StateViewer;
