/*!
 * Description: Controls container component
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

// Import Controls component
import Controls from '../components/controls';

// Map state changes to props
const mapStateToProps = (state) => ({
  topic: state.topic,
  displayMode: state.displayMode,
});

/**
 * Export the Controls container component
 */
export default connect(mapStateToProps, null)(Controls);
