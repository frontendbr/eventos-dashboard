import React from 'react'
import { string, number } from 'prop-types'

const Eye = ({ color, size }) => (
  <svg
    viewBox='0 0 1792 1792'
    fill={color}
    height={`${size}px`}
    width={`${size}px`}
  >
    <path
      d='M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z'
    />
  </svg>
)


Eye.propTypes = {
  color: string,
  size: number
}

export default Eye
