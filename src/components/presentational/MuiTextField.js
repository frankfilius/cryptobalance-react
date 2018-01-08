import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'

export default function MuiTextField(props) {
  return (
    <TextField>
      {props.children}
    </TextField>
  )
}

MuiTextField.propTypes = {
  children : PropTypes.element
}