import React from 'react'
import styled from 'styled-components'
import { tablet } from 'utils/breakpoints'

const StyledHeader = styled.div`
  background-color: white;
  position: absolute;
  padding: 0 10px;
  height: 80px;
  display: flex;
  align-items:center;
  justify-content:space-between;
  top: 0;
  left: 0;
  box-shadow: 0 1px 23px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0);
  z-index: 5;
  width: 100%;

  @media (min-width:${tablet}){
    padding: 0 30px;    
  }

`

const Header = ({ children }) => (
  <StyledHeader>
    {children}
  </StyledHeader>
)

export { Header }
