import React, { PureComponent } from 'react'
import { injectGlobal } from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import EventosDashboard from './screens/eventos-dashboard'

injectGlobal`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  body > div {
    height: 100%;
  }
`

class App extends PureComponent {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path='/' component={EventosDashboard} />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
