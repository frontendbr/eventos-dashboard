import React, { Component } from 'react'
import { blue, gray } from 'utils/colors'
import FaIcon from '@fortawesome/react-fontawesome'
import faSlidersH from '@fortawesome/fontawesome-free-solid/faSlidersH'
import styled from 'styled-components'

const StyledFiltro = styled.div`
  border: solid 1px ${gray};
  width: 200px;
  border-radius: 5px;
  padding: 15px 15px;
  display:flex;
  justify-content: space-between;
  align-items:center;

  &.active{
    border-color:${blue};
    >.label-filter{
      color:${blue};
    }
  }

  >.label-filter{
    color:${gray};
  }

  >.icon-filter{
    cursor:pointer;
  }
`

class Filtro extends Component {
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
    const colorIcon = this.state.visible ? blue : gray
    
    return (
      <StyledFiltro className={className}>
        <span className='label-filter'>Filtro</span>
        <FaIcon className='icon-filter' onClick={this.toggle} size='lg' icon={faSlidersH} color={colorIcon} />
      </StyledFiltro>
    )
    
  }
}

export default Filtro
