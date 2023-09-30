import React from "react";

import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

import DashboardIcon from '@mui/icons-material/Home';
import PetIcon from '@mui/icons-material/Pets';
import ButtonUser from "../../commom/ButtonUser";

const Sidebar = () => {

    return(
        <>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <div className={styles.logo}>
                        <NavLink to = "/">
                            <h1>Pet<a className={styles.logoColor}>Mania</a></h1>
                        </NavLink>
                    </div>  
                    <NavLink to="/" className={styles.active}>
                        <div className={styles.boxUser}>
                            <div className={styles.userImg}>
                            <div className={styles.menuList}>
                                <ButtonUser/>
                                <span>Daniel Silva</span> 
                            </div>
                        </div>
                        </div>
                    </NavLink>
                    <NavLink to="/" className={styles.active}>
                        <div className={styles.menuList}>
                            <DashboardIcon style={{ fontSize: 40 }} /> 
                            <span>Dashboard</span> 
                        </div>
                    </NavLink>

                    <NavLink to="/pets" className={styles.active}>
                        <div className={styles.menuList}>
                            <PetIcon style={{ fontSize: 40 }}/>
                                <span>Adicionar Pets</span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Sidebar;