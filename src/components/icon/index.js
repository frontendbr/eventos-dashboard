import React from 'react'
import { string } from 'prop-types'
import { SWITCH_ICON_TYPE, EYE_ICON_TYPE, EDIT_ICON_TYPE, TRASH_ICON_TYPE } from './types'
import SwitchIcon from './switch-icon'
import EyeIcon from './eye-icon'
import EditIcon from './edit-icon'
import TrashIcon from './trash-icon'

const renderIcon = (color) => ({
  [SWITCH_ICON_TYPE]: <SwitchIcon color={color} />,
  [EYE_ICON_TYPE]: <EyeIcon color={color} />,
  [EDIT_ICON_TYPE]: <EditIcon color={color} />,
  [TRASH_ICON_TYPE]: <TrashIcon color={color} />
})

const Icon = ({ type, color }) => renderIcon(color)[type]

Icon.propTypes = {
  type: string.isRequired,
  color: string
}

Icon.defaultProps = {
  color: '#000'
}

export { Icon }
