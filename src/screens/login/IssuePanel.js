import React from 'react'
import styled from 'styled-components'

import GithubButton from '../../components/github-button'

const StyledIssueContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  width: 70%;
  height: 100%;
  background-color: blue;
  padding: 80px;

  @media (max-width: 576px) {
    display: none;
  }
`

const StyledTitle = styled.p`
  font-size: 4rem;
  padding: 10px 0;
  text-shadow: 1px 1px 2px #2d6da7;
`

const IssueContainer = () => (
  <StyledIssueContainer>
    <span>Última issue no fórum:</span>
    <StyledTitle>
      Seguindo o "mobile-first concept", é ideal dar preferência para
      'max-width' ou 'min-width' no css?
    </StyledTitle>

    <GithubButton>Ler issue no github</GithubButton>
  </StyledIssueContainer>
)

export default IssueContainer
