/*!
 * Description: Book component
 *
 * The component render a book either as a thumbnail or as a link.
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
// Module dependencies
import React from 'react';

// Book component
const Book = ({item,displayMode}) => {
  const styles = {
    links: {
      marginTop: '20px',
    },
    link: {
      padding: '25px',
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

// Book component props
Book.propTypes = {
  // Book data
  item: React.PropTypes.object.isRequired,
  // Display mode
  displayMode: React.PropTypes.string.isRequired,
};

/**
 * Export the Book component
 */
export default Book;
