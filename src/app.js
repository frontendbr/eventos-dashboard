import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { GlobalStyle } from '@/style-guide'

import Home from '@/screens/Home'
import Dashboard from '@/screens/Dashboard'

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
  </>
)

export default App
