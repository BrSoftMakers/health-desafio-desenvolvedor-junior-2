import React from 'react'
import styles from './Home.module.css';
import Linkbutton from './../components/layout/LinkButton';

const Home = () => {
  return (
    <section className={styles.home_container}>
        <h1>
            Bem-vindo ao <span>PETSHOP</span>
        </h1>
        <p>
            Comece a gerenciar os seus pets agora mesmo
        </p>
        <Linkbutton to="/novo" text="Adicionar Pet" />
    </section>
  )
}

export default Home