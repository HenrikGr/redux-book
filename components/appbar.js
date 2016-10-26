/*!
 * Description: Application bar stateless function component
 *
 * The application bar component will will display a login button or a profile menu component
 * dependent on if the user is authenticated or not.
 *
 * The component gets "global" dependencies from the base component such as;
 *
 * - muiTheme, the theme of the application,
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 *
 * Created on 2016-10-24
 */

// Import react and react router
import React from 'react';

// Use toolbar component for the application bar
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import AppsIcon from 'material-ui/svg-icons/navigation/apps';
import IconButton from 'material-ui/IconButton';

const AppBar = (props, context) => (
  <Toolbar
    style={{ backgroundColor: context.muiTheme.appBar.backgroundColor }}
  >
    <ToolbarGroup>
      <IconButton><AppsIcon /></IconButton>
      <ToolbarTitle text="Book search" />
    </ToolbarGroup>
    <ToolbarGroup>
      <MenuItem primaryText="Login" />
    </ToolbarGroup>
  </Toolbar>
);

// Context to access global information set in the Base component.
AppBar.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

/**
 * Export the AppBar component
 */
export default AppBar;
