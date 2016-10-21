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
import { setTopic, fetchBooks } from '../actions';
import TopicSelector from '../components/topicselector';

const mapStateToProps = (state) => ({
  topic: state.topic,
});

const mapDispatchToProps = (dispatch) => ({
  setTopic: (topic) => {
    dispatch(setTopic(topic));
  },
  fetchTopic: (topic) => {
    dispatch(setTopic(topic));
    dispatch(fetchBooks());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicSelector);
