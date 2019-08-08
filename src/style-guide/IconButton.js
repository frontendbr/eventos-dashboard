import React from 'react'
import { string, func } from 'prop-types'
import styled from 'styled-components'

import Icon from './Icon'

const StyledButton = styled.button`
  background-color: transparent;
  outline: 0;
  border: none;
  cursor: pointer;
  height: 22px;
`

const IconButton = ({ icon, onClick }) => (
  <StyledButton onClick={onClick}>
    <Icon
      type={icon}
      color='#9a9a9a'
    />
  </StyledButton>
)

IconButton.propTypes = {
  icon: string.isRequired,
  onClick: func
}

export default IconButton
