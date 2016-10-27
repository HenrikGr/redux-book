/*!
 * Description: StateViewerContainer component.
 *
 * The component is a container component with the purpose of subscribe
 * to the Redux store and pass changes as props to the StateViewer component.
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
 *   - Books
 *    - Book
 *    - Book
 *    - ...
 *  - StateViewerContainer (*)
 *   - StateViewer
 *
 * We are using mapStateToProps to subscribe to Redux store updates. Any time
 * the store will updates, mapStoreToProps will be called and pass the changed state
 * as props to the StateViewer component.
 *
 * The props we will pass are;
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
// Module dependencies
import { connect } from 'react-redux';

// Import StateViewer component
import StateViewer from '../components/stateviewer';

// Import stateHistory object
import stateHistory from '../statehistory';

// Map state changes to props
const mapStateToProps = (state) => ({
  books: state.books,
  topic: state.topic,
  currentStatus: state.currentStatus,
  displayMode: state.displayMode,
  history: stateHistory,
});

/**
 * Export the StateViewerContainer component.
 */
export default connect(mapStateToProps, null)(StateViewer);
