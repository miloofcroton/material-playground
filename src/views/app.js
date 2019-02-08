import React, { Component, Fragment } from 'react';

import { Router, Switch } from 'react-router-dom'
import Switches from './layout/switches'

import Head from './layout/head';

import { MuiThemeProvider } from '@material-ui/core/styles';
import muiTheme from './layout/theme/mui'

import ScrollToTop from './lib/ScrollTop'

import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={muiTheme}>
          <Router history={history}>
            <Fragment>
              <Head/>
              <ScrollToTop>
                <Switch>
                  <Switches/>
                </Switch>
              </ScrollToTop>
            </Fragment>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
