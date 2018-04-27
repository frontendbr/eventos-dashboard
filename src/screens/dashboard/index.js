import React, { PureComponent } from 'react'

import Layout, { Header, Content } from 'components/layout'
import styled from 'styled-components'
import { Logo } from 'components'
import Title from './title'
import UserDetails from './user-details'
import Events from './events'

const StyledLogo = styled(Logo)`
  max-width: 50px; 
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
          <Title />
          <Events />
        </Content>
      </Layout>
    )
  }
}

export default EventosDashboard
