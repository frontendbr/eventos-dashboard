import React from 'react'
import { text, bool } from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 5px;
  overflow: hidden;
  max-width: 400px;
  background-color: ${p => (p.primary ? '#0081E2' : '#fff')};
  color: ${p => p.primary && '#fff'};

  > span {
    flex-grow: 1;
    text-transform: uppercase;
    font-size: 1rem;
    padding: 0 50px;
  }

  > i {
    font-size: 2rem;
    background-color: ${p => (p.primary ? '#0072C8' : '#000')};
    padding: 8px;
    color: #fff;
  }
`

const GitHubButton = ({ children, primary }) => (
  <StyledButton primary={primary}>
    <i>GH</i>
    <span>{children}</span>
  </StyledButton>
)

GitHubButton.propTypes = {
  children: text,
  primary: bool
}

GitHubButton.defaultProps = {
  children: 'Github',
  primary: false
}

export default GitHubButton
