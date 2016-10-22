/*!
 * Description: DisplayMode container component.
 *
 * We are also using mapDispatchToProps to pass action creators as props to the
 * DisplayMode component. The object we are passing include functions with
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
import { setDisplayMode } from '../actions';

// Import DisplayMode component
import DisplayMode from '../components/displayMode';

// Map action creators to props
const mapDispatchToProps = (dispatch) => ({
  setListing: () => {
    dispatch(setDisplayMode('LISTING'));
  },
  setThumbnail: () => {
    dispatch(setDisplayMode('THUMBNAIL'));
  },
});

/**
 * export the DisplayMode container component
 */
export default connect(null, mapDispatchToProps)(DisplayMode);
