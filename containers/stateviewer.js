/*!
 * Description: StateViewer container component.
 *
 * The StateViewer container component subscribes to the application state,
 * located in the Redux store and when any changes occur to the state,
 * the StateViewer component will receive them as props.
 *
 * We declare all of the application states in mapStateToProps and make sure
 * the StaeViewer component will receive them when changes by the connect API.
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

/**
 * Subscribe to the state in the Redux store and pass changes as props
 * to the StateViewer component.
 * @param state
 */
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
