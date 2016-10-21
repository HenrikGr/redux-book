/*!
 * Description:
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
import React from 'react';

require('./book.css');

const DisplayMode = (props) => {
  const { setListing, setThumbnail, displayMode } = props;
  const switchToListing = () => {
    setListing();
  };

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

DisplayMode.contextTypes = {
  store: React.PropTypes.object.isRequired,
};

DisplayMode.propTypes = {
  setListing: React.PropTypes.func.isRequired,
  setThumbnail: React.PropTypes.func.isRequired,
  displayMode: React.PropTypes.string.isRequired,
};

export default DisplayMode;
