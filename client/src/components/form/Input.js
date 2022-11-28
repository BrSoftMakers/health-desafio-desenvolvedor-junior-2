

import React from 'react'
import styles from './input.module.css'

const Input = ({type, text, name, value, handleOnChange}) => {

  return (
    <div className={styles.form_control}>     
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        onChange={handleOnChange}
        name={name}
        id={name}
        value={value}
        required
      />
    </div>
  )
}

export default Input