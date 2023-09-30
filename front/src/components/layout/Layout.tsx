import React from "react";

import styles from "./Layout.module.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Sidebar/>
                <div className={styles.boxContent}>

                  <div className={styles.content}>{children}</div>
                  <Footer/>
                </div>
                
            </div>
            
        </div>
    );
};

export default Layout;