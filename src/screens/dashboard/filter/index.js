import React, { Component } from 'react'
import FaIcon from '@fortawesome/react-fontawesome'
import faSlidersH from '@fortawesome/fontawesome-free-solid/faSlidersH'
import { blueLight, gray } from 'utils/colors'

import { Checkbox, Input, Button } from 'components'

import { ButtonsContainer, InputContainer, LabelFilter, StyledFilter } from './filter.styled'
import Dropdown from './dropdown'
import Row from './row'

class Filter extends Component {
  constructor () {
    super()

    this.state = { visible: false }
  }

  toggle = () => {
    this.setState({ visible: !this.state.visible })
  }

  render () {
    const className = this.state.visible ? 'active' : ''
    const colorIcon = this.state.visible ? blueLight : gray

    return (
      <StyledFilter className={className}>

        <LabelFilter>Filtro</LabelFilter>

        <FaIcon className='icon-filter' onClick={this.toggle} size='lg' icon={faSlidersH} color={colorIcon} />

        <Dropdown visible={this.state.visible} >

          <Row title='Status'>

            <InputContainer>
              <Checkbox label='Aprovado' />
            </InputContainer>

            <InputContainer>
              <Checkbox label='Reprovado' />
            </InputContainer>

          </Row>

          <Row title='Data'>

            <InputContainer>
              <Input type='date' />
            </InputContainer>

            <InputContainer>
              <Input type='date' />
            </InputContainer>

          </Row>

          <ButtonsContainer>
            <Button label='Limpar todos os filtros' is='danger' />

            <div className="primary-container">
              <Button onClick={this.toggle} label='Cancelar' is='secondary' />
              <Button label='Aplicar' is='primary' />
            </div>

          </ButtonsContainer>

        </Dropdown>

      </StyledFilter>
    )

  }
}

export default Filter
