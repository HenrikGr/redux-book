/*!
 * Description: TopicSelector component
 *
 * The component renders an input field to enter search terms
 * utilizing the Google API.
 *
 * The setTopic() props is used to bind the input value to the
 * Redux store and when pressing Enter key, we use the prop fetchTopic()
 * to do a search for books.
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
import React from 'react';

/**
 * TopicSelector Component.
 */
export default class TopicSelector extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // Put the cursor at the end of the input field
  componentDidMount() {
    function putCursorAtEnd(input) {
      const value = input.value;
      input.value = '';
      input.value = value;
    }

    const input = this.refs.input;

    input.focus();
    putCursorAtEnd(input);
  }

  // Update topic state
  handleChange(event) {
    this.props.setTopic(event.target.value);
  }

  // Perform a fetch if Enter
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.fetchTopic(event.target.value);
    }
  }

  render() {
    const styles = {
      topic: {
        marginRight: '10px',
        fontFamily: 'tahoma',
        fontSize: '18px',
      },

      input: {
        fontFamily: 'tahoma',
        fontSize: '16px',
        marginRight: '10px',
      },
    };

    const topic = this.props.topic;

    return (
      <span>
        <span style={styles.topic}>
          Topic
        </span>

        <input
          type="text"
          ref="input"
          style={styles.input}
          value={topic}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </span>
    );
  }
}

/**
 * TopicSelector props
 * @type {{topic: *, setTopic: *, fetchTopic: *}}
 */
TopicSelector.propTypes = {
  topic: React.PropTypes.string.isRequired,
  setTopic: React.PropTypes.func.isRequired,
  fetchTopic: React.PropTypes.func.isRequired,
};
