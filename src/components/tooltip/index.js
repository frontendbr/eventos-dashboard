import React from 'react'
import styled from 'styled-components'

const StyledTooltip = styled.div`
  position: relative;
  >span{
    transform:scale(0);
    padding: 3px 0;
    position:absolute;
    top:-35px;
    width: 150px;
    left: 50%; 
    margin-left:-75px;
    color:white;
    text-align:center;
    border-radius: 4px;
    background:rgba(0,0,0,.7);
    transition:100ms;
    &:after{
      content: ' ';
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: rgba(0,0,0,.7) transparent transparent transparent;
    }
  }

  &:hover{
    >span{
      transform:scale(1);      
      display:block;
    }
  }
`

const Tooltip = ({ children, title }) => (
  <StyledTooltip>
    <span>{title}</span>
    {children}
  </StyledTooltip>
)

export { Tooltip }
