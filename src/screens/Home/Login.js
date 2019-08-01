import React from 'react'
import styled from 'styled-components'

import { desktop, tablet } from '@/utils/breakpoints'

import { GithubButton, Logo } from '@/components'

const StyledLogin = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  height: 100%;
  padding: 24px 40px;
  width: 100%;

  @media (min-width: ${tablet}){
    width:50%;
  }

  @media (min-width: ${desktop}){
    width:30%;
  }
`

const StyledTitle = styled.h1`
  display: block;
  margin-top: 80px;
`

const StyledWelcome = styled.span`
  display: block;
  padding: 20px 0;
  color: #9a9a9a;
`

const Login = () => (
  <StyledLogin>
    <Logo />
    <StyledTitle>Portal de eventos</StyledTitle>
    <StyledWelcome>
      Bem vindo, este é o <strong>portal de eventos</strong> do Front-end
      Brasil, realize o login para continuar.
    </StyledWelcome>
    <GithubButton primary>Login com github</GithubButton>
  </StyledLogin>
)

export default Login
