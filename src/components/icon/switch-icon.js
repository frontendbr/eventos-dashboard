import React from 'react'
import { string } from 'prop-types'

const SwitchIcon = ({ color }) => (
  <svg
    fill='none'
    height='24'
    stroke={color}
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
    viewBox='0 0 24 24'
    width='24'>
      <rect height='14' rx='7' ry='7' width='22' x='1' y='5' />
      <circle cx='8' cy='12' r='3' />
    </svg>
)


SwitchIcon.propTypes = {
  color: string
}

export default SwitchIcon
