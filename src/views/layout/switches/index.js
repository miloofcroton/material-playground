import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'

import Dashboard from '../../content/Dashboard'
import Wizard from '../../content/Wizard'
import Cards from '../../content/Cards'
import Main from '../../content/Main'
import Signup from '../../content/Signup'

import ScrollToTop from '../../lib/ScrollTop'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/dashboard' component={ Dashboard } />
          <Route exact path='/signup' component={ Signup } />
          <Route exact path='/wizard' component={ Wizard } />
          <Route exact path='/cards' component={ Cards } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )
