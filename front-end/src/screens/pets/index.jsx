import { useEffect, useState } from "react";
import { set } from "react-hook-form";

import { PetCard } from "../../components/petCard";

import { petApi } from "../../services/petApi";

import { Container, PetCardsContainer } from "./style";

export default function Pets() {
    const [pets, setPets] = useState([]);

    function RenderPets() {
        return pets.map((pet) => (
            <PetCard
                key={pet.id}
                id={pet.id}
                name={pet.name}
                breed={pet.breed}
                phoneNumber={pet.owner.phoneNumber}
                type={pet.type}
            />
        ));
    }

    async function fetchPets() {
        try {
            const apiPets = await petApi.get();

            setPets(apiPets);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPets();
    }, []);

    return (
        <Container>
            <PetCardsContainer>
                <RenderPets />
            </PetCardsContainer>
        </Container>
    );
}
