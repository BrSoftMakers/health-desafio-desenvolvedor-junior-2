import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.contentFooter}>
                <h4>&copy; {new Date().getFullYear()} PetMania | Todos os direitos reservados | Created by Daniel Ferreira</h4>
            </div>
        </footer>
    )
}

export default Footer;