import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui'

export default class ButtonMui extends PureComponent {
  static propTypes = {
    children : PropTypes.element
  }
  
  render() {
    return (
      <Button></Button>
    )
  }
}