/*!
 * Description: TopicSelector component
 *
 * The component renders an input field to enter search terms
 *
 * The app component hierarchy looks like this:
 *
 * App
 *  - ControlsContainer
 *   - TopicSelectorContainer
 *    - TopicSelector (*)
 *   - DisplayModeContainer
 *    - DisplayMode
 *   - HistoryContainer
 *    - History
 *  - BooksContainer
 *   - Book
 *   - Book
 *   - ...
 *  - StateViewerContainer
 *
 * The component gets props from the TopicSelectorContainer component;
 * - topic, string containing the current value of the input field.
 * - setTopic, action creator function to bind value entered to the Redux store.
 * - fetchTopic, action creator to be invoked when performing a nre search.
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

  // Event handler to bind the value to topic state.
  handleChange(event) {
    this.props.setTopic(event.target.value);
  }

  // Event handler to dispatch a fetch if Enter key is pressed
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.fetchTopic(event.target.value);
    }
  }

  // Render component
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
    
    return (
      <span>
        <span style={styles.topic}>
          Topic
        </span>

        <input
          type="text"
          ref="input"
          style={styles.input}
          value={this.props.topic}
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
