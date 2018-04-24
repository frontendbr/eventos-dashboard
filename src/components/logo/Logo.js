import React from 'react'
import styled from 'styled-components'

import LogoSVG from './logo-600px--color.svg'

const StyledLogo = styled.img`
  width: 200px;
  height: 200px;
`

const Logo = ({ ...props }) => (
  <StyledLogo
    src={LogoSVG} alt='FrontEndBR'
    {...props}
  />
)

export default Logo
