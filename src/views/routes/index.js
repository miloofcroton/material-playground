import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Dashboard from '../lib/Dashboard'
import Wizard from '../lib/Wizard'
import Cards from '../lib/Cards'
import Main from '../lib/Main'
import Signup from '../lib/Signup'
import ScrollToTop from '../lib/ScrollTop'

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
