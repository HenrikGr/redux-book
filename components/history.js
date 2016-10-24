/*!
 * Description: History component
 *
 * The app component hierarchy looks like this:
 *
 * App
 *  - ControlsContainer
 *   - TopicSelectorContainer
 *    - TopicSelector
 *   - DisplayModeContainer
 *    - DisplayMode
 *   - HistoryContainer
 *    - History (*)
 *  - BooksContainer
 *   - Book
 *   - Book
 *   - ...
 *  - StateViewerContainer
 *
 * The component gets props from the HistoryContainer component;
 * - past, array of past states
 * - present, current state
 * - future, array of future states
 * - undo(), state history method to undo last change in the state
 * - redo(), state history method to redo next change in the state
 * - gotState(), state history method to go to a specific state.
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
import React from 'react';


/**
 * History component
 * @param past
 * @param present
 * @param future
 * @param undo
 * @param redo
 * @param gotoState
 * @returns {XML}
 * @constructor
 */
export const History = ({ past, present, future, undo, redo, gotoState }) => {
  const styles = {
    container: {
      marginLeft: '20px',
      cursor: 'pointer',
    },

    link: { textDecoration: 'none' },
    input: { cursor: 'pointer' },
  };

  const RightArrow = () => (
    <a
      href="#"
      style={styles.link}
      onClick={() => redo()}
    >
      &#8594;
    </a>
  );

  const LeftArrow = () => (
    <a
      href="#"
      style={styles.link}
      onClick={() => undo()}
    >
      &#8592;
    </a>
  );

  const max = () =>
    (past ? past.length : 0) +
    (present ? 1 : 0) +
    (future ? future.length : 0) - 1;

  const value = () =>
    past ? past.length : 0;

  return (
    <span style={styles.container}>
      History

      <input
        type="range"
        style={styles.input}
        min={0}
        max={max()}
        value={value()}
        onChange={event => gotoState(event.target.value)}
      />

      {(past && past.length > 0) ? <LeftArrow /> : null}
      {(future && future.length > 0) ? <RightArrow /> : null}
    </span>
  );
};

/**
 * History component props
 * @type {{past: *, present: *, future: *, undo: *, redo: *, gotoState: *}}
 */
History.propTypes = {
  past: React.PropTypes.array.isRequired,
  present: React.PropTypes.object.isRequired,
  future: React.PropTypes.array.isRequired,
  undo: React.PropTypes.func.isRequired,
  redo: React.PropTypes.func.isRequired,
  gotoState: React.PropTypes.func.isRequired,
};
