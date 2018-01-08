import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

export default function MuiTypography(props) {
  return (
    <Typography type={props.type} gutterBottom>
      {props.children}
    </Typography>
  )
}

MuiTypography.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.string
}