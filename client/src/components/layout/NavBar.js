

import React from 'react'
import Container from './Container';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <NavLink to="/" >
                    <h1>PETSHOP</h1>
                </NavLink>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/pets">Pets</NavLink>
                    </li>
                </ul>
                
            </Container>
        </nav>
    );
}

export default NavBar