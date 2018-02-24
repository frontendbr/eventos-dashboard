import React, { PureComponent } from 'react'
import { injectGlobal } from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Eventos from './screens/eventos'

injectGlobal`
  *{
    font-family: ProximaNova;
    text-rendering: optimizeLegibility;
    -webkit-text-rendering: optimizeLegibility;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
  }

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
          <Route exact path='/' component={Eventos} />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
