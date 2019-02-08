/* eslint-disable import/first */
import React, { Fragment } from 'react';

import { Router, Switch } from 'react-router-dom'
import Switches from './layout/switches'

import Head from './layout/head';
import Header from './layout/header';

import { install } from '@material-ui/styles';
install();

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import muiTheme from './layout/theme/mui'
import GlobalStyle from './layout/theme/style';

import ScrollToTop from './lib/navigation/ScrollToTop'

import createHistory from 'history/createBrowserHistory';
export const history = createHistory();


const App = () => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <Router history={history}>
        <Fragment>
          <CssBaseline />
          <GlobalStyle />
          <Head/>
          <Header/>
          <ScrollToTop>
            <Switch>
              <Switches/>
            </Switch>
          </ScrollToTop>
        </Fragment>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
