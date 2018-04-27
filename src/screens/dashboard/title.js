import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 25px;

  .title {
    font-weight: 600;
    font-size: 30px;
  }

  .sub-title {
    font-size: 16px;
    color: #9f9f9f;
    margin-left: 2px;
  }
`

const Title = () => (
  <StyledTitle>
    <span className='title'>Eventos</span>
    <span className='sub-title'>Últimos eventos cadastrados no dashboard</span>
  </StyledTitle>
)

export default Title
