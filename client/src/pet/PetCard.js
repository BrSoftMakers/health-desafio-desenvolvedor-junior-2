
import React from 'react'
import styles from './PetCard.module.css'
import { NavLink } from 'react-router-dom';

const PetCard = ({
    id,
    name,
    age,
    tipo,
    raca,
    imagem,
    owner,
    phone,
    handleRemove
}) => {

    const remove = (e) =>{
        e.preventDefault()
        handleRemove(id)
    }
    return (
        <div className={styles.pet_card}>
            <h4>{name}</h4>
            <img src={imagem} alt="foto do pet"/>
            <p>
                <span>Idade:</span> {age} anos
            </p>

            <div className={styles.pet_cards_box}>
                <p>
                    <span>Raça:</span> {tipo}
                </p>
                <p>
                    <span>Raça:</span> {raca}
                </p>
            </div>

            <p>
                <span>Dono</span> {owner}
            </p>

            <p>
                <span>Phone:</span> {phone}
            </p>
            <div className={styles.pet_card_actions}>
                <NavLink to={`/${id}`}>
                    Editar
                </NavLink>
                <button onClick={remove}>
                    Excluir
                </button>
            </div>
        </div>
    )
}
export default PetCard