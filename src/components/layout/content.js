import React from 'react'
import styled from 'styled-components'

const StyledContent = styled.div`
  background-color: #f5f5f5;
  padding: 70px 80px 70px 80px;
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100% - 70px);
  position: relative;
  top: 70px;
  display: block;
  z-index: 4;
`

const Content = ({ children }) => (
  <StyledContent>
    {children}
  </StyledContent>
)

export { Content }
