import React from 'react'
import styled from 'styled-components'

import Logo from '../../components/logo'
import GithubButton from '../../components/github-button'

const StyledAuthenticationPanel = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  padding: 24px 40px;

  @media (max-width: 576px) {
    width: 100%;
  }
`

const StyledTitle = styled.h1`
  display: block;
`

const StyledWelcome = styled.span`
  display: block;
  padding: 20px 0;
  color: #9a9a9a;
`

const AuthenticationPanel = () => (
  <StyledAuthenticationPanel>
    <Logo style={{ marginBottom: '80px', maxWidth: '100px' }} />
    <StyledTitle>Portal de eventos</StyledTitle>
    <StyledWelcome>
      Bem vindo, este é o <strong>portal de eventos</strong> do Front-end
      Brasil, realize o login para continuar.
    </StyledWelcome>
    <GithubButton primary>Login com github</GithubButton>
  </StyledAuthenticationPanel>
)

export default AuthenticationPanel
