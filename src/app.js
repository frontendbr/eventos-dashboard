import React, { PureComponent } from 'react'
import { injectGlobal } from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './screens/login'
import Dashboard from './screens/dashboard'

injectGlobal`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  div,
  button,
  input,
  span,
  p,
  li,
  select{
    font-family: 'Roboto', sans-serif;
  }

  html,
  body,
  body > div {
    height: 100%;
  }
`

class App extends PureComponent {
  render () {
    return (
      <Router>
        <React.Fragment>
          <Route exact path='/' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
