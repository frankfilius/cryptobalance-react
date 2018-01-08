import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

export default function MuiButton(props) {
  return (
    <Button>{props.children}</Button>
  )
}

MuiButton.propTypes = {
  children : PropTypes.element
}