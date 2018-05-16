import React from 'react'
import styled from 'styled-components'

const StyledDropdown = styled.div`
  position:absolute;
  width:350px;
  padding: 70px;
  right:-2px;
  background:white;
  border: solid 2px #e6e6e6;
  border-radius: 4px;
  top: 4rem;
  &.open{
    display:block;
  }
  &.hidden{
    display:none;
  }
  &::after {
    content: ' ';
    position: absolute;
    width: 14px;
    height: 14px;
    background: white;
    transform: rotate(45deg);
    top: -8px;
    right: 15px;
    border-top: solid 2px #e6e6e6;
    border-left: solid 2px #e6e6e6;
  }
`

const Dropdown = ({ visible }) => (
  <StyledDropdown className={visible ? 'visible' : 'hidden'}>
    <span>teste</span>
  </StyledDropdown>
)

export default Dropdown
