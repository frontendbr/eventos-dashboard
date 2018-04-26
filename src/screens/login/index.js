import React from 'react'
import styled from 'styled-components'

import AuthenticationPanel from './authentication-panel'
import IssuePanel from './issue-panel'

const StyledPage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const Login = () => (
  <StyledPage>
    <AuthenticationPanel />
    <IssuePanel />
  </StyledPage>
)

export default Login
