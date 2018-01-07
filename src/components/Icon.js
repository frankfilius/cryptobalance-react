import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class Icon extends PureComponent {
  static propTypes = {
    id: propTypes.string,
    icon: propTypes.object.isRequired
  }

  render() {
    const { id, icon } = this.props
    return (
      <FontAwesomeIcon id={id} style={{color: '#FFCDD2'}} icon={icon}/>
    )
  }
}