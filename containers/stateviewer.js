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
import StateViewer from '../components/stateviewer';
import stateHistory from '../statehistory';

const mapStateToProps = (state) => {
  return {
    books: state.books,
    topic: state.topic,
    currentStatus: state.currentStatus,
    displayMode: state.displayMode,
    history: stateHistory
  }
};

export default connect(mapStateToProps,null)(StateViewer);
