/*!
 * Description: DisplayModeContainer component.
 *
 * The component is a container component with the purpose of subscribe
 * to the Redux store and pass changes as props to the DisplayMode component.
 *
 * The app component hierarchy looks like this:
 *
 * App
 *  - ControlsContainer
 *   - TopicSelectorContainer
 *    - TopicSelector
 *   - DisplayModeContainer (*)
 *    - DisplayMode
 *   - HistoryContainer
 *    - History
 *  - BooksContainer
 *   - Book
 *   - Book
 *   - ...
 *  - StateViewerContainer
 *
 * We are using mapStateToProps to subscribe to Redux store updates. Any time
 * the store will updates, mapStoreToProps will be called and pass the changed state
 * as props to the DisplayMode component.
 *
 * The props we will pass are;
 * - displayMode, string containing the text the user entered
 *
 * We are also using mapDispatchToProps to pass action creators as props to the
 * DisplayMode component. The object we are passing include functions with
 * the same names, but with every action creator wrapped into a dispatch call
 * so they may be invoked directly.
 *
 * The action creators we pass as props are;
 * - setListing()
 * - setThumbnail()
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

// Map state changes to props
const mapStateToProps = (state) => ({
  displayMode: state.displayMode,
});

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
 * export the DisplayModeContainer component
 */
export default connect(mapStateToProps, mapDispatchToProps)(DisplayMode);
