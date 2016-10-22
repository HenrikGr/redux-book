/*!
 * Description: History container component.
 *
 * We are using mapStateToProps to subscribe to Redux store updates. Any time
 * the store will updates, mapStoreToProps will be called and pass the changed state
 * as props to the History component.
 *
 * We are also using mapDispatchToProps to pass action creators as props to the
 * History component. The object we are passing include functions with
 * the same names, but with every action creator wrapped into a dispatch call
 * so they may be invoked directly.
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

// Map action creators as props
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
 * Export the History container component
 */
export default connect(mapStateToProps, mapDispatchToProps)(History);
