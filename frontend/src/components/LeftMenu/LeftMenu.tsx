import styles from "./LeftMenu.module.css";
import { FaPaw } from "react-icons/fa";

const LeftMenu = () => {
    return (
        <>
        <div className={styles.logoArea}>
            <div className={styles.logo}>
                <FaPaw size={'3em'}/>
            </div>
        <   div className={styles.logoTitle}>PetShop</div>
        </div>

        <div className={styles.authorCredits}>Jonathan Wanderley</div>
        </>
    );
}

export default LeftMenu;