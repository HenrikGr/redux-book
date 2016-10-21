/*!
 * Description:
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
import { connect } from 'react-redux';
import { setDisplayMode } from '../actions';
import DisplayMode from '../components/displayMode';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  setListing: () => {
    dispatch(setDisplayMode('LISTING'));
  },
  setThumbnail: () => {
    dispatch(setDisplayMode('THUMBNAIL'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMode);
