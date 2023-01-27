import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { PetCard } from "../../components/petCard";

import { petApi } from "../../services/petApi";

import { Container, PetCardsContainer } from "./style";

export default function Pets() {
    const [pets, setPets] = useState([]);

    function RenderPets() {
        return pets.map((pet) => (
            <Link
                to="/viwePet"
                key={pet.id}
                state={{ ...pet }}
            >
                <PetCard
                    id={pet.id}
                    name={pet.name}
                    breed={pet.breed}
                    phoneNumber={pet.owner.phoneNumber}
                    type={pet.type}
                />
            </Link>
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
