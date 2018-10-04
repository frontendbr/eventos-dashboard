import React from 'react'
import styled from 'styled-components'
import { optionalNode } from 'prop-types'

const StyledLayout = styled.div`
  height: 100vh;
`

const Layout = ({ children }) => (
  <StyledLayout>
    {children}
  </StyledLayout>
)


Layout.propTypes = {
  children: optionalNode
}


export { Header } from './header'
export { Content } from './content'
export default Layout
