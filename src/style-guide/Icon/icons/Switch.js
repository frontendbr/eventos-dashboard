import React from 'react'
import { string, number } from 'prop-types'

const Switch = ({ color, size }) => (
  <svg
    fill='none'
    stroke={color}
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
    viewBox='0 0 24 24'
    height={`${size}px`}
    width={`${size}px`}
  >
    <rect height='14' rx='7' ry='7' width='22' x='1' y='5' />
    <circle cx='8' cy='12' r='3' />
  </svg>
)


Switch.propTypes = {
  color: string,
  size: number
}

export default Switch
