import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display:flex; 
  align-items:center;
  >.user-img{
      width:35px;
      height:35px;
      border-radius:4px;
  }
  >.user-name{
    font-weight: 500;
    font-size:16px;
    color: #757575;
    display:block;
    margin-left:10px;
  }
`

const UserDetails = () => (
  <StyledDiv>
    <img className='user-img' src='https://avatars3.githubusercontent.com/u/3642745?s=460&v=4' alt='Foto de Perfil' />
    <span className='user-name' >Olá, Marcel</span>
  </StyledDiv>
)

export default UserDetails
