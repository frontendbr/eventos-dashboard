import React from 'react'
import { string, bool } from 'prop-types'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/lib/fa'

const StyledButton = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 5px;
  overflow: hidden;
  max-width: 488px;
  background-color: ${p => (p.primary ? '#0081E2' : '#fff')};
  color: ${p => p.primary ? '#fff' : '#2d2d2d'};

  > span {
    flex-grow: 1;
    text-transform: uppercase;
    font-size: 1rem;
  }
`

const StyledFaGithub = styled(FaGithub)`
  font-size: 3rem;
  background-color: ${p => (p.primary === 'true' ? '#0072C8' : '#2d2d2d')};
  padding: 6px;
  color: #fff;
`

const GitHubButton = ({ children, primary }) => (
  <StyledButton primary={primary}>
    <StyledFaGithub primary={primary.toString()} />
    <span>{children}</span>
  </StyledButton>
)

GitHubButton.propTypes = {
  children: string,
  primary: bool
}

GitHubButton.defaultProps = {
  children: 'Github',
  primary: false
}

export default GitHubButton
