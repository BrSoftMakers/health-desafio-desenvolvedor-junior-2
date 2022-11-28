

import React from 'react'
import styles from './input.module.css'

const Input = ({type, text, nome, value, handleOnChange, required}) => {

  return (
    <div className={styles.form_control}>     
      <label htmlFor={nome}>{text}</label>
      <input
        type={type}
        onChange={handleOnChange}
        name={nome || ""}
        id={nome}
        value={value}
        required={required}
      />
    </div>
  )
}

export default Input