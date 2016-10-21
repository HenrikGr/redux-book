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
import Controls from '../components/controls';

const mapStateToProps = (state) => ({
  topic: state.topic,
  displayMode: state.displayMode,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
