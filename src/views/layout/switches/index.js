import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Dashboard from '../../content/Dashboard'
import Wizard from '../../content/Wizard'
import Items from '../../content/Items'
import Main from '../../content/Main'
import Signup from '../../content/Signup'

const switches = () => {
  return (
      <Fragment>
        <Route exact path='/' component={ Main } />
        <Route exact path='/dashboard' component={ Dashboard } />
        <Route exact path='/signup' component={ Signup } />
        <Route exact path='/wizard' component={ Wizard } />
        <Route exact path='/items' component={ Items } />
      </Fragment>
    )
}

export default switches;
