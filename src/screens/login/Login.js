import React from 'react'
import styled from 'styled-components'

import AuthenticationPanel from './AuthenticationPanel'

const StyledPage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const LoginScreen = () => (
  <StyledPage>
    <AuthenticationPanel />
  </StyledPage>
)

export default LoginScreen
