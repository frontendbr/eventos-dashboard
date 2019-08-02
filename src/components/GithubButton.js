import React from 'react'
import { string, bool, func } from 'prop-types'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/lib/fa'

import IsLoading from './IsLoading'

const StyledButton = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  border: 0;
  border-radius: 5px;
  overflow: hidden;
  max-width: 488px;
  background-color: ${p => (p.primary ? '#0081E2' : '#fff')};
  color: ${p => p.primary ? '#fff' : '#2d2d2d'};
  height: 48px;
  position: relative;
  outline: 0;

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
  min-width: 48px;
  height: 100%;
`

const GitHubButton = ({ primary, loading, onClick, children }) => (
  <StyledButton
    primary={primary}
    onClick={onClick}
  >
    <StyledFaGithub
      primary={primary.toString()}
    />
    <IsLoading
      loading={loading}
      message={null}
      loaderSize={28}
      loaderColor={primary ? 'white' : 'black'}
    >
      <span>{children}</span>
    </IsLoading>
  </StyledButton>
)

GitHubButton.propTypes = {
  primary: bool,
  loading: bool,
  onClick: func,
  children: string,
}

GitHubButton.defaultProps = {
  children: 'Github',
  primary: false
}

export default GitHubButton
