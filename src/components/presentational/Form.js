import React from 'react'
import styles from './Form.css'

export default function Form(props) {
   console.log(props)
    return (
      <form className="Form" onSubmit={props.onSubmit}>
        {props.children}
      </form>
    )
}

Form.propTypes = {

}