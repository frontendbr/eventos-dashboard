import React, { Component } from 'react'
import styled from 'styled-components'
import EventCard from './event-card'
import { desktop, tablet } from 'utils/breakpoints'
import { listEvents } from 'api'

const StyledEvents = styled.div`
  display: grid;
  grid-row-gap: 15px;
  grid-template-columns: auto;
  @media (min-width:${tablet}){
    grid-column-gap: 30px;
    grid-template-columns: auto auto;
  }
  @media (min-width:${desktop}){
    grid-template-columns: auto auto auto auto;
  }
`
class Events extends Component {
  state = {
    events: []
  }

  componentDidMount(){
    listEvents()
    .then(events => this.setState({ events }))
  }

  render(){
    return (
      <StyledEvents>
        {this.state.events.map(event => <EventCard {... event} />)}
      </StyledEvents>
    )
  }
}

export default Events
