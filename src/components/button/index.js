import React from 'react'
import styled from 'styled-components'
import { oneOf, string } from 'prop-types'

import { red, gray, blue } from 'utils/colors'

const StyledButton = styled.button`
    border:0;
    outline:0;
    background:0;
    padding: 15px 0;
    font-size: 14px;
    font-weight: 500;
    cursor:pointer;
    
    &.danger {
        color: ${red};
    }

    &.secondary {
        color: ${gray}
    }

    &.primary {
        color: ${blue}
    }
`

const Button = ({ label, is }) => (
    <StyledButton className={is} >{label}</StyledButton>
)

Button.propTypes = {
    is: oneOf(['primary', 'secondary', 'danger']),
    label: string
}

export { Button }
