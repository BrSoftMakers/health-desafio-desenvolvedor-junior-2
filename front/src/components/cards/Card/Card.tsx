import React from "react";

import styles from "./Card.module.css";
import { Pets } from "../../../services/petService";

const CardPet = ( props: Pets ) => {
    return (
        <main>
            <div className={styles.cards}>
                    <div className={styles.cardImg}>
                        <img src={props.photoLink} alt="Imagem" />
                    </div>
                    <div className={styles.cardInfo}>
                        <h2>{props.petName}</h2>
                        <p><strong>Idade:</strong> {props.petAge} Anos</p>
                        <p><strong>Raça:</strong> {props.petRace}</p>
                        <p><strong>Tipo:</strong> {props.petType}</p>
                        <p><strong>Tutor(a):</strong> {props.petOwner}</p>
                        <p><strong>Contato:</strong> {props.phoneOwner}</p>
                    </div>
             </div>
        </main>
    )
}

export default CardPet;