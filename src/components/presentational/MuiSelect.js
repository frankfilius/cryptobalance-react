import React from 'react'
import PropTypes from 'prop-types'
import Select from 'material-ui/Select'

export default function MuiSelect(props) {
  return (
    <div className="MuiSelect">
        {!!props.inputLabel && props.inputLabel}
      
      <Select name="symbol" value={props.value} onChange={props.onChange} >
        {props.children}
        
      </Select >
    </div>
  )
}

MuiSelect.propTypes = {
  
}
