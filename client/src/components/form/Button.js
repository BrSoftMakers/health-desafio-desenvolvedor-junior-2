import styles from './button.module.css'

import React from 'react'

export const Button = ({text}) => {
  return (
    <div>
        <button className={styles.btn}>{text}</button>
    </div>
  )
}
