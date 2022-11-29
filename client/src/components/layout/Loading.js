import React from 'react';
import styles from './Loading.module.css';


const Loading = () => {
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src="https://raw.githubusercontent.com/dgleyramos1/costs/main/src/img/loading.svg" alt="Loading" />
        </div>
    );
}

export default Loading;