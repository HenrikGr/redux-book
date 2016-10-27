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
 * The application supports undo (by clicking the left arrow) and redo (by clicking the right
 * arrow), along with a history slider that moves you back and forth among the application's
 * previous states.
 *
 * The app component hierarchy looks like this:
 *
 * App (*)
 *  - ControlsContainer
 *   - TopicSelectorContainer
 *    - TopicSelector
 *   - DisplayModeContainer
 *    - DisplayMode
 *   - HistoryContainer
 *    - History
 *  - BooksContainer
 *   - Book
 *   - Book
 *   - ...
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

// Import ControlContainer component
import ControlsContainer from './controls';

// Import BooksContainer component
import BooksContainer from './books';

// Import StateViewerContainer component
import StateViewerContainer from './stateviewer';

// Import AppBar component
import AppBar from '../components/appbar';


/**
 * Export the App component.
 */
export default () => (
  <div>
    <AppBar />
    <ControlsContainer />
    <BooksContainer />
    <StateViewerContainer />
  </div>
);
