import React from 'react'
import { string } from 'prop-types'

const EditIcon = ({ color }) => (
  <svg
    height='24px'
    fill={color}
    viewBox='0 0 1792 1792'
    width='24px'>
      <path d='M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z' />
    </svg>
)


EditIcon.propTypes = {
  color: string
}

export default EditIcon
