import React from 'react'
import styled from 'styled-components'
import EventCard from './event-card'
import { desktop, tablet } from 'utils/breakpoints'

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

const Events = () => (
  <StyledEvents>
    <EventCard />
    <EventCard />
    <EventCard />
    <EventCard />
  </StyledEvents>
)

export default Events
