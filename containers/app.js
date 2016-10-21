/*!
 * Description:
 *
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
import React from 'react';
import ControlsContainer from './controls';
import BooksContainer from './books';
import StateViewerContainer from './stateviewer';

const titleStyle = {
  fontFamily: 'tahoma',
  fontSize: '24px',
  textAlign: 'center',
};

const Title = () => (
  <div style={titleStyle}>
    Book Search
  </div>
);

export default () => (
  <div>
    <Title />
    <hr />
    <ControlsContainer />
    <BooksContainer />
    <StateViewerContainer />
  </div>
);
