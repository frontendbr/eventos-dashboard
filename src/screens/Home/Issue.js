import React from 'react'
import styled from 'styled-components'

import { tablet, desktop } from '@/utils/breakpoints'

import { GithubButton } from '@/components'

const StyledIssue = styled.div`
  display: none;
  box-sizing: border-box;
  color: #fff;
  height: 100%;
  background-color: blue;
  padding: 80px;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: ${tablet}) {
    width: 50%;
    display:flex;
  }

  @media (min-width: ${desktop}) {
    width: 70%;
  }
`

const StyledTitle = styled.p`
  padding: 10px 0;
  text-shadow: 1px 1px 2px #2d6da7;

  @media (min-width: ${tablet}) {
    font-size:2rem;
  }

  @media (min-width: ${desktop}){
    font-size: 3rem;
  }

`

const Issue = () => (
  <StyledIssue>
    <span>Última issue no fórum:</span>
    <StyledTitle>
      Seguindo o &quot;mobile-first concept&quot;, é ideal dar preferência para
      &apos;max-width&apos; ou &apos;min-width&apos; no css?
    </StyledTitle>

    <GithubButton>Ler issue no github</GithubButton>
  </StyledIssue>
)

export default Issue
