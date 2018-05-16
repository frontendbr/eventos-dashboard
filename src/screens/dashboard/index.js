import React, { PureComponent } from 'react'

import Layout, { Header, Content } from 'components/layout'
import styled from 'styled-components'
import { Logo } from 'components'
import Title from './title'
import Filtro from './filtro'
import UserDetails from './user-details'
import Events from './events'

const StyledLogo = styled(Logo)`
   max-width: 50px;
`

const StyledContentHeader = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`

class EventosDashboard extends PureComponent {
  render () {
    return (
      <Layout>
        <Header>
          <StyledLogo />
          <UserDetails />
        </Header>
        <Content>
          <StyledContentHeader>
            <Title />
            <Filtro />
          </StyledContentHeader>
          <Events />
        </Content>
      </Layout>
    )
  }
}

export default EventosDashboard
