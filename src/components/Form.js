import React, { PureComponent } from 'react'
import SelectField from 'material-ui/SelectField'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/fontawesome-free-solid'
import styles from './Form.css'

export default class Form extends PureComponent {
  render() {
   const { content, contentValue, onChange, onClick, onSubmit, valueOption, valueSelect, valueNumber } = this.props
   let button = null
   if (!content[0].amount) {
     button =  <FlatButton className='button' style={{fontSize: 20, width: 30}} hoverColor='transparent' icon={<FontAwesomeIcon id="icon-plus" style={{color: '#C8E6C9'}} icon={faPlus}/>} type='submit' />
   } else {
     button = <FlatButton className='button' style={{width: 30}} hoverColor='transparent' icon={<FontAwesomeIcon id="icon-minus" style={{color: '#FFCDD2'}} icon={faMinus}/>} onClick={onClick}/>
   }
    return (
      <form className="Form" onSubmit={onSubmit}>
        <div>
          <SelectField name="symbol" style={{width: 110}} value={valueSelect} onChange={onChange} >
            { content.map((item, index) => <MenuItem key={index} value={item[contentValue]} primaryText={item[contentValue]}/>)}
          </SelectField >
        </div>
        <div>
          <TextField name="amount" type="number" step="0.00000001" style={{minWidth: 80}} value={valueNumber} onChange={onChange} />
        </div>
        <div>
          {button}
        </div>
      </form>
    )
  }
}