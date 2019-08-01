import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { GlobalStyle } from '@/style-guide'

import Login from '@/screens/login'
import Dashboard from '@/screens/dashboard'

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
  </>
)

export default App
