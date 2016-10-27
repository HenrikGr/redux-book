/*!
 * Description: HistoryContainer component.
 *
 * The component is a container component with the purpose of subscribe
 * to the Redux store and pass changes as props to the History component.
 *
 * The app component hierarchy looks like this:
 *
 * App
 *  - ControlsContainer
 *   - TopicSelectorContainer
 *    - TopicSelector
 *   - DisplayModeContainer
 *    - DisplayMode
 *   - HistoryContainer (*)
 *    - History
 *  - BooksContainer
 *   - Book
 *   - Book
 *   - ...
 *  - StateViewerContainer
 *
 * We are using mapStateToProps to get updates from the statehistory object. Any
 * time the statehistory object will updates, mapStoreToProps will be called and pass
 * the changes as props to the History component.
 *
 * The props we will pass are;
 * - past: array of past states
 * - present: current state
 * - future: array of future states
 *
 * We are also using mapDispatchToProps to pass statehistory methods as props to the
 * History component. The object we are passing include functions with
 * the same names, but with every action creator wrapped into a dispatch call
 * so they may be invoked directly.
 *
 * The action creators we pass as props are;
 * - undo(), state history method to undo last change in the state
 * - redo(), state history method to redo next change in the state
 * - gotState(), state history method to go to a specific state.
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
// Module dependencies
import { connect } from 'react-redux';

// Import action creators
import { undo, redo, gotoState } from '../actions';

// Import History component
import { History } from '../components/history';

// Import stateHistory object
import stateHistory from '../statehistory';

// Map state changes to props
const mapStateToProps = () => ({
  past: stateHistory.past,
  present: stateHistory.present,
  future: stateHistory.future,
});

// Map history object methods as props
const mapDispatchToProps = (dispatch) => ({
  undo: () => {
    dispatch(undo());
  },
  redo: () => {
    dispatch(redo());
  },
  gotoState: (stateIndex) => {
    dispatch(gotoState(stateIndex));
  },
});

/**
 * Export the HistoryContainer component
 */
export default connect(mapStateToProps, mapDispatchToProps)(History);
