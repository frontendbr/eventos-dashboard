import React from 'react'
import { optionalNode } from 'prop-types'
import styled from 'styled-components'

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


export { Header } from './Header'
export { Content } from './Content'
export default Layout
