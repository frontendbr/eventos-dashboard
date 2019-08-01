import React from 'react'
import styled from 'styled-components'

import AuthenticationPanel from './authentication-panel'
import IssuePanel from './issue-panel'

const StyledLogin = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const Login = () => (
  <StyledLogin>
    <AuthenticationPanel />
    <IssuePanel />
  </StyledLogin>
)

export default Login
