import React, { Component, Fragment } from 'react';

import { HashRouter, Switch } from 'react-router-dom'
import Switches from './layout/switches'

import Head from './layout/head';

import { MuiThemeProvider } from '@material-ui/core/styles';
import muiTheme from './layout/theme/mui'

import ScrollToTop from './lib/ScrollTop'

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={muiTheme}>
          <HashRouter>
            <Fragment>
              <Head/>
              <ScrollToTop>
                <Switch>
                  <Switches/>
                </Switch>
              </ScrollToTop>
            </Fragment>
          </HashRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
