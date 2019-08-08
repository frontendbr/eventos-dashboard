import React from 'react'
import { boolean, string, number, node } from 'prop-types'
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

const IsLoading = ({ loading, message = 'Carregando...', loaderSize, loaderColor, children }) => (
  loading ? (
    <StyledLoading>
      <Loader size={loaderSize} color={loaderColor} />
      {message && (
        <StyledMessage>
          {message}
        </StyledMessage>
      )}
    </StyledLoading>
  ) : children
)

IsLoading.propTypes = {
  loading: boolean,
  message: string,
  loaderSize: number,
  loaderColor: string,
  children: node
}

export default IsLoading
