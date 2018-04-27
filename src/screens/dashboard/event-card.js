import React from 'react'
import styled from 'styled-components'
import { IconButton } from 'components'

const StyledEventCard = styled.div`
  width: 100%;
  height: 230px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  padding: 15px 30px 15px 30px;
  display: flex;

  .footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-self: flex-end;
  }
`

const EventCard = () => (
  <StyledEventCard>
    <div className='footer'>
      <IconButton
        icon='switch'
      />
      <IconButton
        icon='eye'
      />
      <IconButton
        icon='edit'
      />
      <IconButton
        icon='trash'
      />
    </div>
  </StyledEventCard>
)

export default EventCard
