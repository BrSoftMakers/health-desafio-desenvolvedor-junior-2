import React from 'react'
import styles from './select.module.css'
import isEmpty from 'lodash/isEmpty';

const Select = ({text, options, handleOnChange, name, value, required}) => {

  
  return (
    <div className={styles.form_control} >
        <label htmlFor={name}>{text}</label>
        <select onChange={handleOnChange} name={name} required={required}>
            <option disabled selected >Selecione uma opção</option>
            {!isEmpty(options) &&
              options.map((option) => (
                <option value={option.name} key={option.id}>{option.name}</option>
              ))
            }
        </select>
    </div>
  )
}

export default Select