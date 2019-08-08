import React from 'react'
import styled from 'styled-components'

import Layout, { Header, Content } from '@/style-guide/Layout'

import { Logo } from '@/components'

import Title from './Title'
import UserDetails from './UserDetails'
import Events from './Events'

const StyledLogo = styled(Logo)`
   max-width: 50px;
`

const StyledContentHeader = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`

const DashBoard = () => (
  <Layout>
    <Header>
      <StyledLogo />
      <UserDetails />
    </Header>
    <Content>
      <StyledContentHeader>
        <Title />
      </StyledContentHeader>
      <Events />
    </Content>
  </Layout>
)

export default DashBoard
