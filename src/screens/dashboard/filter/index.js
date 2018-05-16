import React, { Component } from 'react'
import { blueLight, gray } from 'utils/colors'
import Dropdown from './dropdown'
import FaIcon from '@fortawesome/react-fontawesome'
import faSlidersH from '@fortawesome/fontawesome-free-solid/faSlidersH'
import styled from 'styled-components'

const StyledFilter = styled.div`
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

  >.label-filter{
    color:${gray};
  }

  >.icon-filter{
    cursor:pointer;
  }
`

class Filter extends Component {
  constructor () {
    super()
    this.state = {
      visible: false
    }
  }

  toggle = () => {
    this.setState({ visible: !this.state.visible })
  }

  render () {
    const className = this.state.visible ? 'active' : ''
    const colorIcon = this.state.visible ? blueLight : gray
    
    return (
      <StyledFilter className={className}>
        <span className='label-filter'>Filtro</span>
        <FaIcon className='icon-filter' onClick={this.toggle} size='lg' icon={faSlidersH} color={colorIcon} />
        <Dropdown visible={this.state.visible} />
      </StyledFilter>
    )
    
  }
}

export default Filter
