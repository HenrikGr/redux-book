/*!
 * Description:
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
import React from 'react';
import DisplayModeContainer from '../containers/displayMode';
import TopicSelectorContainer from '../containers/topicselector';
import HistoryContainer from '../containers/history';

const Controls = (props) => {
  const { topic, displayMode } = props;
  
  const styles = {
    controls: {
      padding: '15px',
      marginBottom: '25px',
    },
  };

  return (
    <div style={styles.controls}>
      <TopicSelectorContainer topic={topic} />
      <DisplayModeContainer displayMode={displayMode} />
      <HistoryContainer />
    </div>
  );
};

Controls.propTypes = {
  displayMode: React.PropTypes.string.isRequired,
  topic: React.PropTypes.string.isRequired,
};

export default Controls;
