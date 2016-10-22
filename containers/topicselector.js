/*!
 * Description: TopicSelector container component
 *
 * We are using mapStateToProps to subscribe to Redux store updates. Any time
 * the store will updates, mapStoreToProps will be called and pass the changed state
 * as props to the TopicSelector component.
 *
 * We are also using mapDispatchToProps to pass action creators as props to the
 * TopicSelector component. The object we are passing include functions with
 * the same names, but with every action creator wrapped into a dispatch call
 * so they may be invoked directly.
 *
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

// Map state changes to props
const mapStateToProps = (state) => ({
  topic: state.topic,
});

// Map action creators as props
const mapDispatchToProps = (dispatch) => ({
  setTopic: (topic) => {
    dispatch(setTopic(topic));
  },
  fetchTopic: (topic) => {
    dispatch(setTopic(topic));
    dispatch(fetchBooks());
  },
});

/**
 * Export the TopicSelector container component.
 */
export default connect(mapStateToProps, mapDispatchToProps)(TopicSelector);
