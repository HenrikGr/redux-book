/*!
 * Description:
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
import { connect } from 'react-redux';
import Books from '../components/books';

// Map state to props
const mapStateToProps = (state) => {
  return {
    books: state.books,
    topic: state.topic,
    currentStatus: state.currentStatus,
    displayMode: state.displayMode
  }
};

export default connect(mapStateToProps,null)(Books);
