/*!
 * Description: The application module for this playground.
 * 
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
import { connect } from 'react-redux';
import { undo, redo, gotoState } from '../actions';
import { History } from '../components/history';
import stateHistory from '../statehistory';

const mapStateToProps = () => {
  return {
    past: stateHistory.past,
    present: stateHistory.present,
    future: stateHistory.future
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    undo: () => {
      dispatch(undo());
    },
  
    redo: () => {
      dispatch(redo());
    },
  
    gotoState: (stateIndex) => {
      dispatch(gotoState(stateIndex));
    }
  }
};

export default connect (mapStateToProps,mapDispatchToProps)(History);
