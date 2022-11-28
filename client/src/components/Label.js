import React from 'react'
import style from './label.module.css';

const Label = ({children, text}) => {
  return (
    <label className={style.box}>
        {text}
        {children}
    </label>
  )
}

export default Label