import React, { useEffect, useState } from "react";

import styles from "./Pet.module.css"
import NewPet from "./NewPet"
import { Pets, getPets } from "../../services/petService";
import Card from "../../components/cards/Card";

const Pet = () => {

    const [openForm, setOpenForm] = useState(false)

    const [pets, setPet] = useState<Pets[]>([]);

    const fetchPet = async () => {
        try {
            const response = await getPets();
            setPet(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPet();
    }, []);

    const handleOpenForm = () => {
        setOpenForm(true)
    }

    return(
        <main>
           <div className={styles.headerPage}>
                <div className={styles.buttonPage}>
                    <NewPet onClick={handleOpenForm} title="Adicionar Novo(a)"/>
                </div>
            </div>

            <div className={styles.contentCards}>

                {pets.map(
                    (pet, index) =>
                    <Card
                    key={index}
                    photoLink={pet.photoLink}
                    petName={pet.petName}
                    petAge={pet.petAge}
                    petType={pet.petType}
                    petRace={pet.petRace}
                    petOwner={pet.petOwner}
                    phoneOwner={pet.phoneOwner}
                    />
                )}
                
            </div>
        </main>
    )
}

export default Pet;