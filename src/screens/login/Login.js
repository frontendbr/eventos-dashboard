import React from 'react'
import styled from 'styled-components'

import AuthenticationPanel from './AuthenticationPanel'
import IssuePanel from './IssuePanel'

const StyledPage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const LoginScreen = () => (
  <StyledPage>
    <AuthenticationPanel />
    <IssuePanel />
  </StyledPage>
)

export default LoginScreen
