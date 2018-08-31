import React from 'react'
import styled from 'styled-components'
import { gray, grayLight } from 'utils/colors';

const StyledRow = styled.div`
    display:flex;
    padding: 15px 0;
    border-bottom: solid 1px ${grayLight};

    >.title{
        padding-right: 15px;
        color: ${gray};
        font-weight:600;
    }
`

const Row = ({ children, title }) => (
    <StyledRow>
        <div className='title'>{title}</div>
        {children}
    </StyledRow>
)

export default Row
