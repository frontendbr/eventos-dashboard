import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

import LogoSVG from './logo.svg'

const StyledLogo = styled.img`
  max-width:100px;
`

const Logo = ({ className }) => (
  <StyledLogo
    className={className}
    src={LogoSVG} alt='Logo Front-End Brasil'
  />
)


Logo.propTypes = {
  className: string
}

export { Logo }
