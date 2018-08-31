import React from 'react'
import styled from 'styled-components'

import { grayLight, gray } from 'utils/colors';

const StyledInput = styled.input`
    border-radius: 2px;
    border:solid 1px ${grayLight};
    padding: 5px;
    font-size: 14px;
    color: ${gray};
    outline:0;
`

const Input = (props) => (
    <StyledInput {...props} />
)

export { Input }
