import React from 'react'
import { boolean, string, node } from 'prop-types'
import styled from 'styled-components'

import { Loader } from '@/style-guide'
import { gray } from '@/style-guide/colors'

const StyledLoading = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledMessage = styled.span`
  margin-top: 20px;
  color: ${gray};
`

const IsLoading = ({ loading, message = 'Carregando...', children }) => (
  loading ? (
    <StyledLoading>
      <Loader />
      <StyledMessage>
        {message}
      </StyledMessage>
    </StyledLoading>
  ) : children
)

IsLoading.propTypes = {
  loading: boolean,
  message: string,
  children: node
}

export default IsLoading
