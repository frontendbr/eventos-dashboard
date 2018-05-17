import React from 'react'
import { blue, gray } from 'utils/colors'
import styled from 'styled-components'
import FaIcon from '@fortawesome/react-fontawesome'
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck'

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  >.real-checkbox{
    cursor:pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;    
    border: solid 2px ${blue};
    width: 18px;
    height: 18px;
  }
  .label {
    color:${gray};
    font-size: 14px;
    margin-left: 10px;
  }
  >input:checked + .real-checkbox {
    background: ${blue};
  }
  >input {
    display: none;
  }
`

const Checkbox = ({ label, onChange, name, id, ...rest }) => (
  <StyledLabel>
    <input
      {...rest}
      onChange={onChange}
      name={name}
      id={id}
      type='checkbox'
    />
    <div className='real-checkbox'>
      <FaIcon onClick={this.toggle} icon={faCheck} transform='shrink-5' color='white' />
    </div>
    {label && <span className='label'>{label}</span>}
  </StyledLabel>
)

export { Checkbox }
