import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  background-color: white;
  position: absolute;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  box-shadow: 0 1px 23px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0);
  z-index: 5;
`

const Header = ({ children }) => (
  <StyledHeader>
    {children}
  </StyledHeader>
)

export { Header }
