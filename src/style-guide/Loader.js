import React from 'react'
import { number, string } from 'prop-types'

import { gray } from './colors'

const Loader = ({ size = 50, color = gray }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 100 100'
    preserveAspectRatio='xMidYMid'
    style={{ background: 'none' }}
  >
    <path
      stroke='none'
      d='M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50'
      fill={color}
      transform='rotate(334.871 50 51)'
    >
      <animateTransform
        attributeName='transform'
        type='rotate'
        calcMode='linear'
        values='0 50 51;360 50 51'
        keyTimes='0;1'
        dur='1.2s'
        begin='0s'
        repeatCount='indefinite'
      />
    </path>
  </svg>
)

Loader.propTypes = {
  size: number,
  color: string
}

export default Loader
