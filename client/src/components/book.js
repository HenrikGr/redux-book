/*!
 * Description: Book stateless function component
 *
 * The component render a book either as a thumbnail or as a link.
 *
 * App
 *  - ControlsContainer
 *   - TopicSelectorContainer
 *    - TopicSelector
 *   - DisplayModeContainer
 *    - DisplayMode
 *   - HistoryContainer
 *    - History
 *  - BooksContainer
 *   - Books
 *    - Book (*)
 *    - Book
 *    - ...
 *  - StateViewerContainer
 *
 * The component gets props from the Books component;
 * - item, object with data for a book
 * - displayMode, string to tell how the book should be rendered.
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
// Module dependencies
import React from 'react';


/**
 * Book stateless function component
 * @param item
 * @param displayMode
 * @returns {XML}
 * @constructor
 */
const Book = ({ item, displayMode }) => {
  const styles = {
    links: {
      marginTop: '20px',
    },
    link: {
      padding: '25px',
      color: 'grey',
    },
    image: {
      boxShadow: '3px 3px 3px #686868',
      marginBottom: '15px',
    },
  };

  // Helper function to render book data as link
  const linkMarkup = (currentItem, link) => (
    <div style={styles.links}>
      <a href={link} style={styles.link}>
        {currentItem.volumeInfo.title}
      </a>
    </div>
  );

  // Helper function to render book data as a thumbnail
  const thumbnailMarkup = (currentItem, link) => (
    <a href={link} style={styles.link}>
      <img
        src={currentItem.volumeInfo.imageLinks.thumbnail}
        style={styles.image}
        role="presentation"
      />
    </a>
  );

  // Get the link from book data
  const link = item.volumeInfo.canonicalVolumeLink;

  // Render component
  return displayMode === 'THUMBNAIL' ? thumbnailMarkup(item, link) : linkMarkup(item, link);
};


/**
 * Book stateless function component props
 * @type {{item: *, displayMode: *}}
 */
Book.propTypes = {
  item: React.PropTypes.object.isRequired,
  displayMode: React.PropTypes.string.isRequired,
};


/**
 * Export the Book stateless function component
 */
export default Book;
