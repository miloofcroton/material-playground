import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Switches from './layout/switches'
import { blue, indigo } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});


class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Switches />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
