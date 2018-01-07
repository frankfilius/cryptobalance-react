import React, { PureComponent } from 'react'
import Select from 'material-ui/Select'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import Button from 'material-ui/Button'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faMinus, faUpload } from '@fortawesome/fontawesome-free-solid'
import styles from './Form.css'

export default class Form extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      showBtn: false
    }
  }

  onFocus() {
    this.setState({
      showBtn: true
    })
  }

  onBlur() {
    this.setState({
      showBtn: false
    })
  }

  handleUpdate = () => {
    const symbol = this.symbol.value;
    const amount = this.amount.value;
    // do something with `name`
  }


  render() {
   const { content, contentValue, onChange, onClick, onSubmit, valueOption, valueSelect, valueNumber } = this.props
   
    return (
      <form className="Form" onSubmit={onSubmit}>
        <div>
          <Select name="symbol" style={{width: 110}} value={valueSelect} onChange={onChange} >
            { content.map((item, index) => <MenuItem key={index} value={item[contentValue]} primaryText={item[contentValue]}/>)}
          </Select >
        </div>
        <div>
          <TextField name="amount" type="number" step="0.00000001" style={{minWidth: 80}} onFocus={ this.onFocus.bind(this) } onBlur={ this.onBlur.bind(this) } defaultValue={valueNumber} ref={input => this.amount = input} />
        </div>
        <div>
        <Button className='button' style={{width: 30}} hoverColor='transparent' icon={<FontAwesomeIcon id="icon-minus" style={{color: '#FFCDD2'}} icon={faMinus}/>} onClick={onClick}/>
        </div>
        <div  style={{width: 30}}>
        {this.state.showBtn &&
          <Button className='button' style={{width: 30}} hoverColor='transparent' icon={<FontAwesomeIcon id="icon-upload" style={{color: '#BBDEFB'}} icon={faUpload}/>} onClick={onClick} />
        }
        </div>
      </form>
    )
  }
}