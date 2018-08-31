import styled from 'styled-components'

import { blueLight, gray } from 'utils/colors'

export const StyledFilter = styled.div`
    border: solid 1px ${gray};
    width: 200px;
    border-radius: 5px;
    padding: 15px 15px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    position:relative;

    &.active{
    border-color:${blueLight};
    >.label-filter{
        color:${blueLight};
    }
    }

    >.icon-filter{
    cursor:pointer;
    }
`

export const LabelFilter = styled.span`
    color:${gray};
`

export const ButtonsContainer = styled.div`
    display:flex;
    justify-content: space-between;
    >.primary-container button:nth-child(1) {
        padding-right: 15px;
    }
`

export const InputContainer = styled.div`
    padding-right: 15px;
`
