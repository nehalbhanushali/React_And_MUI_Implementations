import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AwesomeComponent from './AwesomeComponent.jsx';
 
const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <AwesomeComponent />
  </MuiThemeProvider>
);
 
ReactDOM.render(
  <App />,
  document.getElementById('app')
);

