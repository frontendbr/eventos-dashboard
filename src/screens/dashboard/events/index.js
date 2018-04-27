import React from 'react'
import styled from 'styled-components'
import EventCard from './event-card'

const StyledEvents = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 15px;

  /* 4 colunas */
  grid-template-columns: auto auto auto auto;
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
