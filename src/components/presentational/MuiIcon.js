import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'material-ui/Icon'

export default function MuiIcon(props) {
  return (
    <Icon color={props.color}>{props.icon}</Icon>
  )
}

MuiIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}