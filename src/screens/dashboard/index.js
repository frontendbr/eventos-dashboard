import React, { PureComponent } from 'react'
import Layout, { Header, Content } from '../../components/layout'
import Title from './title'
import Events from './events'

class EventosDashboard extends PureComponent {
  render () {
    return (
      <Layout>
        <Header />
        <Content>
          <Title />
          <Events />
        </Content>
      </Layout>
    )
  }
}

export default EventosDashboard
