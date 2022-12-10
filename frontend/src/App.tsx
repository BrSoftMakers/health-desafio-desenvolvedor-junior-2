import React from 'react';
import styles from './App.module.css';
import LeftMenu from './components/LeftMenu/LeftMenu';
import PetList from './components/PetList/PetList';
import SectionUp from './components/SectionUp/SectionUp';

const App = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftMenuSpace}></div>
        <div className={styles.leftMenu}>
          <LeftMenu />
        </div>
        <main className={styles.main}>
          <SectionUp />
          <hr />
          <section className={styles.pets}>
            <h2>Pet List</h2>
            <div>
              <PetList />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
