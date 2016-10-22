/*!
 * Description: App component
 *
 * The App component just render
 * - Title component, inline component,
 * - ControlsContainer component,
 * - BooksContainer component, and
 * - a StateViewContainer component
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

// Inline styles
const titleStyle = {
  fontFamily: 'tahoma',
  fontSize: '24px',
  textAlign: 'center',
};

// Inline Title stateless component
const Title = () => (
  <div style={titleStyle}>
    Book Search
  </div>
);

/**
 * Export the App component.
 */
export default () => (
  <div>
    <Title />
    <hr />
    <ControlsContainer />
    <BooksContainer />
    <StateViewerContainer />
  </div>
);
