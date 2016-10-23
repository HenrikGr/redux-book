/*!
 * Description: App component
 *
 * The app uses the Google Books REST API to asynchronously search for books. After the user
 * enters a topic into the text field and presses Enter, the application fetches information
 * for the first 10 books that match the topic, displaying a thumbnail of each book's cover.
 *
 * The book thumbnails are links. When you click one, you see more information about the book
 * on books.google.com.
 *
 * The application supports undo (by clicking the left arrow) and redo (by clicking the right arrow),
 * along with a history slider that moves you back and forth among the application's previous states.
 *
 * The component hierarchy looks like this:
 *
 * App
 *  - Controls
 *   - TopicSelector
 *   - DisplayOption
 *   - History
 *  - Books
 *   - Book
 *   - Book
 *   - ...
 *  - StateViewer
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
import React from 'react';
import ControlsContainer from './controls';
import BooksContainer from './books';
import StateViewerContainer from './stateviewer';

// Inline styles
const titleStyle = {
  fontFamily: 'tahoma',
  fontSize: '24px',
  textAlign: 'center',
};

// Inline Title stateless component
const Title = () => (
  <div style={titleStyle}>
    Book Search
  </div>
);

/**
 * Export the App component.
 */
export default () => (
  <div>
    <Title />
    <hr />
    <ControlsContainer />
    <BooksContainer />
    <StateViewerContainer />
  </div>
);
