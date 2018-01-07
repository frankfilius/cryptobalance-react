import React, { PureComponent } from 'react'
import Select from 'material-ui/Select'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import Button from 'material-ui/Button'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/fontawesome-free-solid'
import styles from './Form.css'

export default class Form extends PureComponent {
  render() {
   const { content, contentValue, onChange, onClick, onSubmit, valueOption, valueSelect, valueNumber } = this.props
   let button = null
   if (!content[0].hasOwnProperty('amount')) {
     button =  <Button className='button' style={{fontSize: 20, width: 30}} hoverColor='transparent' icon={<FontAwesomeIcon id="icon-plus" style={{color: '#C8E6C9'}} icon={faPlus}/>} type='submit' />
   } else {
     button = <Button className='button' style={{width: 30}} hoverColor='transparent' icon={<FontAwesomeIcon id="icon-minus" style={{color: '#FFCDD2'}} icon={faMinus}/>} onClick={onClick}/>
   }
   console.log(faPlus)
    return (
      <form className="Form" onSubmit={onSubmit}>
        <div>
          <Select name="symbol" style={{width: 110}} value={valueSelect} onChange={onChange} >
            { content.map((item, index) => <MenuItem key={index} value={item[contentValue]} primaryText={item[contentValue]}/>)}
          </Select >
        </div>
        <div>
          <TextField name="amount" type="number" step="0.00000001" style={{minWidth: 80}} value={valueNumber} onChange={onChange} />
        </div>
        <div>
          {button}
        </div>
        <div  style={{width: 30}}>
        </div>
      </form>
    )
  }
}