/*!
 * Description: Books container component
 *
 * We are using mapStateToProps to subscribe to Redux store updates. Any time
 * the store will updates, mapStoreToProps will be called and pass the changed state
 * as props to the Books component.
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
import { connect } from 'react-redux';
import Books from '../components/books';

// Map state to props
const mapStateToProps = (state) => ({
  books: state.books,
  topic: state.topic,
  currentStatus: state.currentStatus,
  displayMode: state.displayMode,
});

/**
 * Export Books container component
 */
export default connect(mapStateToProps, null)(Books);
