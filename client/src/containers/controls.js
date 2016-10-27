/*!
 * Description: ControlsContainer component
 *
 * The component is a stateless function component with the purpose
 * of render the TopicSelectorContainer, DisplayModeContainer, and the
 * HistoryContainer components.
 *
 * The app component hierarchy looks like this:
 *
 * App
 *  - ControlsContainer (*)
 *   - TopicSelectorContainer
 *    - TopicSelector
 *   - DisplayModeContainer
 *    - DisplayMode
 *   - HistoryContainer
 *    - History
 *  - BooksContainer
 *   - Books
 *    - Book
 *    - Book
 *    - ...
 *  - StateViewerContainer
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
// Module dependencies
import React from 'react';

// Import TopicSelectorContainer component
import TopicSelectorContainer from '../containers/topicselector';

// Import DisplayModeContainer component
import DisplayModeContainer from '../containers/displayMode';

// Import HistoryContainer component
import HistoryContainer from '../containers/history';


/**
 * Controls stateless function component
 * @returns {XML}
 * @constructor
 */
const Controls = () => {
  const styles = {
    controls: {
      padding: '15px',
      marginBottom: '25px',
    },
  };
  
  /**
   * Render the component and pass the props
   */
  return (
    <div style={styles.controls}>
      <TopicSelectorContainer />
      <DisplayModeContainer />
      <HistoryContainer />
    </div>
  );
};

/**
 * Export the Controls component
 */
export default Controls;
