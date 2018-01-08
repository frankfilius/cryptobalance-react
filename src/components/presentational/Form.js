import React from 'react'
import MuiButton from './MuiButton'
import MuiSelect from './MuiSelect'
import MuiTextField from './MuiTextField'
import styles from './Form.css'

export default function Form(props) {
   console.log(props)
    return (
      <form className="Form" onSubmit={props.onSubmit}>
      <div>
        <MuiSelect 
          loopItems={props.loopItems} 
          itemValue={props.itemValue}
          value={props.valueSelect} 
          onChange={props.onChange}
        />
      </div>
      <div>
        <MuiTextField 
          name="amount" 
          type="number" 
          step="0.00000001" 
          style={{minWidth: 80}} 
          value={props.valueInput} 
          onChange={props.onChange} 
        />
      </div>
      <div>
        <MuiButton />
      </div>
    </form>
    )
}

Form.propTypes = {

}