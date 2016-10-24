/*!
 * Description: DisplayMode stateless function component
 *
 * The component renders radio button used to select how the search result
 * should be rendered.
 *
 * The app component hierarchy looks like this:
 *
 * App
 *  - ControlsContainer
 *   - TopicSelectorContainer
 *    - TopicSelector
 *   - DisplayModeContainer
 *    - DisplayMode (*)
 *   - HistoryContainer
 *    - History
 *  - BooksContainer
 *   - Book
 *   - Book
 *   - ...
 *  - StateViewerContainer
 *
 * The component gets props from the DisplayModeContainer component;
 * - displayMode, string containing the current value of the radio field.
 * - setListing, action creator function to bind value when changing display mode.
 * - setThumbnail, action creator function to bind value when changing display mode.
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
import React from 'react';

require('./book.css');

/**
 * DisplayMode stateless function component
 * @param setListing
 * @param setThumbnail
 * @param displayMode
 * @returns {XML}
 * @constructor
 */
const DisplayMode = ({setListing,setThumbnail,displayMode}) => {
  // Switch to list mode
  const switchToListing = () => {
    setListing();
  };

  // Switch to thumbnail mode
  const switchToThumbnail = () => {
    setThumbnail();
  };

  const styles = {
    radio: {
      marginLeft: '10px',
      cursor: 'pointer',
    },

    radiospan: {
      marginLeft: '20px',
      fontFamily: 'tahoma',
      fontSize: '16px',
    },
  };
  
  // Render component
  return (
    <span>
      <span style={styles.radiospan}>
        Thumbnail
      </span>

      <input
        type="radio"
        name="display"
        style={styles.radio}
        onChange={switchToThumbnail}
        checked={displayMode === 'THUMBNAIL'}
        value="thumbnail"
      />

      <span style={styles.radiospan}>
        List
      </span>

      <input
        type="radio"
        name="display"
        style={styles.radio}
        onChange={switchToListing}
        checked={displayMode !== 'THUMBNAIL'}
        value="list"
      />
    </span>
  );
};

/**
 * DisplayMode props
 * @type {{setListing: *, setThumbnail: *, displayMode: *}}
 */
DisplayMode.propTypes = {
  setListing: React.PropTypes.func.isRequired,
  setThumbnail: React.PropTypes.func.isRequired,
  displayMode: React.PropTypes.string.isRequired,
};

/**
 * Export the DisplayMode component
 */
export default DisplayMode;
