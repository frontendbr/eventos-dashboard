import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.img`
  width: 200px;
  height: 200px;
`

const Logo = ({ ...props }) => (
  <StyledLogo
    {...props}
    src='https://avatars2.githubusercontent.com/u/16963863?s=200&v=4'
    alt='FrontEndBR'
  />
)

export default Logo
