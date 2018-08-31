import React from 'react'
import styled from 'styled-components'

import { grayLight } from 'utils/colors';

const StyledInput = styled.input`
    border-radius: 2px;
    border:solid 1px ${grayLight};
    padding: 5px;
    font-size: 14px;
`

const Input = (props) => (
    <StyledInput {...props} />
)

export { Input }
