/*!
 * Description: TopicSelector container component
 *
 * We are using mapStateToProps to subscribe to Redux store updates. Any time
 * the store will updates, mapStoreToProps will be called and pass the changed state
 * as props to the TopicSelector component.
 *
 * The props we will pass are;
 * - topic, string containing the text the user entered
 *
 * We are also using mapDispatchToProps to pass action creators as props to the
 * TopicSelector component. The object we are passing include functions with
 * the same names, but with every action creator wrapped into a dispatch call
 * so they may be invoked directly.
 *
 * The action creators we pass as props are;
 * - setTopic()
 * - fetchTopic()
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
import { setTopic, fetchBooks } from '../actions';

// Import TopicSelector component
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
