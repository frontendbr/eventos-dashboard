import React from 'react'
import styled from 'styled-components'
import { desktop, tablet } from 'utils/breakpoints'
import { optionalNode } from 'prop-types'

const StyledContent = styled.div`
  background-color: #f5f5f5;
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100% - 70px);
  position: relative;
  top: 70px;
  display: block;
  z-index: 4;
  padding: 70px 20px;
  
  @media (min-width: ${tablet}){
    padding: 70px 80px 70px 80px;    
  }
  
  @media (min-width: ${desktop}){
    padding: 70px 80px 70px 80px;
  }
`

const Content = ({ children }) => (
  <StyledContent>
    {children}
  </StyledContent>
)


Content.propTypes = {
  children: optionalNode
}

export { Content }
