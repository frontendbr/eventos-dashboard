import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

import logo from '@/assets/logo.svg'

const StyledLogo = styled.img`
  max-width:100px;
`

const Logo = ({ className }) => (
  <StyledLogo
    className={className}
    src={logo}
    alt='Logo Front-End Brasil'
  />
)


Logo.propTypes = {
  className: string
}

export default Logo
