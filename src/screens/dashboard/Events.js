import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { desktop, tablet } from '@/utils/breakpoints'

import { IsLoading } from '@/components'

import Event from './Event'

const StyledEvents = styled.div`
  display: grid;
  grid-row-gap: 15px;
  grid-template-columns: auto;

  @media (min-width: ${tablet}){
    grid-column-gap: 30px;
    grid-template-columns: auto auto;
  }

  @media (min-width: ${desktop}){
    grid-template-columns: auto auto auto auto;
  }
`

const useFetchEvents = () => {
  const [events, setEvents] = useState([])
  const [isFetching, setFetching] = useState(false)

  const fetchEvents = async () => {
    setFetching(true)

    // TODO: API_CALL
    setTimeout(() => {
      setEvents([])
      setFetching(false)
    }, 2000)
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return { events, isFetching }
}

const Events = () => {
  const { events, isFetching } = useFetchEvents()

  return (
    <IsLoading
      loading={isFetching}
      message='Carregando eventos...'
    >
      <StyledEvents>
        {events.map(event => (
          <Event
            event={event}
          />
        ))}
      </StyledEvents>
    </IsLoading>
  )
}

export default Events
