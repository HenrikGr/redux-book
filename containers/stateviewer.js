/*!
 * Description: StateViewer container component.
 *
 * We are using mapStateToProps to subscribe to Redux store updates. Any time
 * the store will updates, mapStoreToProps will be called and pass the changed state
 * as props to the TopicSelector component.
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
 * Export the StateViewer container component.
 */
export default connect(mapStateToProps, null)(StateViewer);
