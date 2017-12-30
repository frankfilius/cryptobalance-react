import React, { PureComponent } from 'react'
import SelectField from 'material-ui/SelectField'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'

export default class Form extends PureComponent {
  render() {
   const { content, contentValue, disabled, onChange, onSubmit, valueOption, valueSelect, valueNumber } = this.props
    return (
      <form onSubmit={onSubmit}>
        <div>
          <SelectField autoWidth name="symbol" value={valueSelect} onChange={onChange} disabled={!!disabled} >
            { content.map((item, index) => <MenuItem key={index} value={item[contentValue]} primaryText={item[contentValue]}/>)}
          </SelectField >
        </div>
        <div>
          <TextField name="amount" type="number" step="0.00000001" value={valueNumber} onChange={onChange} disabled={!!disabled}/>
        </div>
        <FlatButton primary={true} style={{ borderColor: "#000000", border: 1 }} type="submit" label="Submit" disabled={disabled} />
      </form>
    )
  }
}