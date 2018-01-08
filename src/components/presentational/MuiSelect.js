import React from 'react'
import PropTypes from 'prop-types'
import Select from 'material-ui/Select'
import { InputLabel } from 'material-ui/Input'
import MuiMenuItem from './MuiMenuItem'

export default function MuiSelect(props) {
  return (
    <div className="MuiSelect">
      <InputLabel htmlFor="coin">Asset</InputLabel>
      <Select name="symbol" value={props.value} onChange={props.onChange} >
        <MuiMenuItem value="">
          <em>None</em>
        </MuiMenuItem>
        { 
          props.loopItems.map((item, index) => {
            return (
              <MuiMenuItem key={index} value={item[props.Itemvalue]} />
            )
          })
        }
      </Select >
    </div>
  )
}

MuiSelect.propTypes = {
  
}
