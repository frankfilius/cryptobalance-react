import React, { PureComponent } from 'react'
import SelectField from 'material-ui/SelectField'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import styles from './Form.css'

export default class Form extends PureComponent {
  render() {
   const { content, contentValue, onChange, onClick, onSubmit, valueOption, valueSelect, valueNumber } = this.props
    return (
      <form className="Form" onSubmit={onSubmit}>
        <div>
          <SelectField name="symbol" style={{width: 90}} value={valueSelect} onChange={onChange} >
            { content.map((item, index) => <MenuItem key={index} value={item[contentValue]} primaryText={item[contentValue]}/>)}
          </SelectField >
        </div>
        <div>
          <TextField name="amount" type="number" step="0.00000001" style={{width: 100}} value={valueNumber} onChange={onChange} />
        </div>
        <div>
        <FlatButton secondary={true} style={{ width: 10 }} type="submit" label="✓" />
        <FlatButton primary={true} style={{ width: 20 }} label="✗" onClick={onClick}/>
        </div>
      </form>
    )
  }
}