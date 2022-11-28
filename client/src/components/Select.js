import React from 'react'
import styles from './select.module.css'

const Select = ({text, options, handleOnChange, name, value}) => {


  return (
    <div className={styles.form_control} >
        <label htmlFor={name}>{text}</label>
        <select onChange={handleOnChange} value={value} name={name} required>
            <option disabled selected>
                Selecione uma opção
            </option>
            {
              options.map((option) => (
                <option value={option.name} key={option.id}>{option.name}</option>
              ))
            }
        </select>
    </div>
  )
}

export default Select