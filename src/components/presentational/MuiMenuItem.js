import React from 'react'
import PropTypes from 'prop-types'
import { MenuItem } from 'material-ui/Menu'

export default function MuiMenuItem(props) {
  return (
    <MenuItem key={props.key} value={props.value}>
      {props.value}
    </MenuItem>
  )
}

MuiMenuItem.propTypes = {
  value: PropTypes.string.isRequired
}