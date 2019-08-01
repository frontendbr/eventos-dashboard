import React from 'react'
import styled from 'styled-components'

import Login from './Login'
import Issue from './Issue'

const StyledHome = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const Home = () => (
  <StyledHome>
    <Login />
    <Issue />
  </StyledHome>
)

export default Home
