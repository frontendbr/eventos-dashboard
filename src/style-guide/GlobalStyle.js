import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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

export default GlobalStyle
