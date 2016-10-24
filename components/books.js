/*!
 * Description: Books stateless function component
 *
 * The component displaying either the books fetched or a spinner.
 * To decide which one, we checking currentStatus from the props.
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
 *    - History
 *  - BooksContainer
 *   - Books (*)
 *    - Book
 *    - Book
 *    - ...
 *  - StateViewerContainer
 *
 * The component gets props from the BooksContainer component;
 * - books, array of book data.
 * - currentStatus, status of the last fetch
 * - displayMode, value indicating how the books should be rendered.
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
// Module dependencies
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Import the Book stateless function component
import Book from './book.js';


/**
 * Books stateless function component
 * @param books
 * @param displayMode
 * @param currentStatus
 * @returns {XML}
 * @constructor
 */
const Books = ({ books, displayMode, currentStatus }) => {
  const styles = {
    container: {
      width: '100%',
    },
    spinner: {
      textAlign: 'center',
      width: '100%',
    },
  };

  // Spinner helper function
  const Spinner = () => (
    <div style={styles.spinner}>
      <img
        src="./images/spinner.gif"
        role="presentation"
      />
    </div>
  );

  // Helper function to create xml markup for the books
  const bookMarkup = () => {
    let components = null;
    let bookItems = (<span>No items!</span>);

    if (books.length > 0) {
      components = books.map(item => {
        if (item.volumeInfo.imageLinks) {
          // Need different keys for different display modes
          // to trigger <ReactCSSTransitionGroup> animations
          const key = displayMode === 'THUMBNAIL' ?
                                       item.id + 1 :
                                       item.id;
          bookItems = (
            <Book
              item={item}
              displayMode={displayMode}
              key={key}
            />
          );
        }
        return bookItems;
      });
    }
    return components;
  };

  /**
   * Render the component
   */
  return (
    <div>
      {currentStatus !== 'Fetching...' ? null : <Spinner />}
      <div style={styles.container}>
        <ReactCSSTransitionGroup
          transitionName="books"
          transitionLeaveTimeout={1}
          transitionEnterTimeout={1000}
        >
          {bookMarkup()}
        </ReactCSSTransitionGroup>
      </div>
    </div>
  );
};


/**
 * Books stateless function component props
 * @type {{books: *, currentStatus: *, displayMode: *}}
 */
Books.propTypes = {
  books: React.PropTypes.array.isRequired,
  currentStatus: React.PropTypes.string.isRequired,
  displayMode: React.PropTypes.string.isRequired,
};


/**
 * Export the Books stateless function component
 */
export default Books;
