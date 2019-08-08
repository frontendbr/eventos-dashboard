import React from 'react'
import { string, number } from 'prop-types'

import Edit from './icons/Edit'
import Eye from './icons/Eye'
import Switch from './icons/Switch'
import Trash from './icons/Trash'

const ICONS = {
  edit: Edit,
  eye: Eye,
  switch: Switch,
  trash: Trash
}

const Icon = ({ name, size = 24, color = '#000' }) => {
  const IconComponent = ICONS[name]

  return (
    <IconComponent
      size={size}
      color={color}
    />
  )
}

Icon.propTypes = {
  name: string,
  size: number,
  color: string
}

export default Icon
