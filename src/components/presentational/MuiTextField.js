import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'

export default function MuiTextField(props) {
  return (
    <TextField value={props.value} onChange={props.onChange} />
  )
}

MuiTextField.propTypes = {
  value : PropTypes.string,
  onChange: PropTypes.function
}