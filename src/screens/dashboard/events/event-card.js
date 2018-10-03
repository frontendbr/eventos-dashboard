import React from 'react'
import { string, object } from 'prop-types'
import styled from 'styled-components'
import { IconButton, Tooltip } from 'components'

const StyledEventCard = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 4px;
  height:300px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  padding: 15px 30px 15px 30px;
  display: flex;
  flex-direction:column;

  >.header{
    display:flex;
    flex-direction:column;
    >.title{
      font-size: 26px;
      padding: 5px 0;
    }
    >.date{
      color:#dbdbdb;
      padding: 5px 0;      
    }
  }

  >.body{
    padding: 15px 0;          
    display:flex;
    flex:1;
    color:#acacac;
  }

  >.footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-self: flex-end;
  }
`



const EventCard = ({ title, shortDescription, date }) => (
  <StyledEventCard>
    <div className='header'>
      <span className='title'>{ title }</span>
      <span className='date'>{date.day} de {date.month}`</span>
    </div>
    <div className='body'>
      { shortDescription }
    </div>
    <div className='footer'>
      <Tooltip title='Marcar evento'>
        <IconButton
          icon='switch'
        />
      </Tooltip>
      <Tooltip title='Visualizar evento'>
        <IconButton
          icon='eye'
        />
      </Tooltip>
      <Tooltip title='Editar evento'>
        <IconButton
          icon='edit'
        />
      </Tooltip>
      <Tooltip title='Excluir evento'>
        <IconButton
          icon='trash'
        />
      </Tooltip>
    </div>
  </StyledEventCard>
)


EventCard.propTypes = {
  title: string,
  shortDescription: string,
  date: object
}

EventCard.defaultProps = {
  title: '',
  shortDescription: 'Nenhuma descrição fornecida :/',
  date: {}
}

export default EventCard
