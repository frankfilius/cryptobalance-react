import React, { PureComponent } from 'react'

export default class Form extends PureComponent {
  render() {
   const { content, contentValue, disabled, onChange, onSubmit, valueOption, valueSelect, valueNumber } = this.props
    return (
      <form onSubmit={onSubmit}>
        <select name="symbol" value={valueSelect} onChange={onChange} disabled={disabled} >
          { content.map((item, index) => <option key={index} value={item[contentValue]}>{item[contentValue]}</option>)}
        </select>
        <input name="amount" type="number" step="0.00000001" value={valueNumber} onChange={onChange} disabled={disabled}/>
        <input type="submit" value="Submit" disabled={disabled} />
      </form>
    )
  }
}