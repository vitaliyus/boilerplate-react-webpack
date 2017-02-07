import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import UserCard from '../UserCard';
import Goods from '../Goods';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const propTypes = { };

const defaultProps = { };

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div >
          <UserCard />
          <Goods />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
