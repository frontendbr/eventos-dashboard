import React from 'react'
import styled from 'styled-components'

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

export { Logo }
