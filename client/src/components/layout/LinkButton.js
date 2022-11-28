import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './LinkButton.module.css';

const Linkbutton = ({ to, text }) => {
    return (
        <NavLink className={styles.btn} to={to}>
            {text}
        </NavLink>
    );
}

export default Linkbutton;