import { Container, PetCardsContainer } from "./style";

import { PetCard } from "../../components/petCard";

export default function Pets() {
    return (
        <Container>
            <PetCardsContainer>
                <PetCard
                    name="Oliveira"
                    breed="Pastor belga"
                    phoneNumber="81993340979"
                    type="GATO"
                    key={1}
                />
                <PetCard
                    name="Oliveira"
                    breed="Pastor belga"
                    phoneNumber="81993340979"
                    type="GATO"
                    key={15}
                />
                <PetCard
                    name="Oliveira"
                    breed="Pastor belga"
                    phoneNumber="81993340979"
                    type="GATO"
                    key={14}
                />
                <PetCard
                    name="Oliveira"
                    breed="Pastor belga"
                    phoneNumber="81993340979"
                    type="GATO"
                    key={13}
                />
                <PetCard
                    name="Oliveira"
                    breed="Pastor belga"
                    phoneNumber="81993340979"
                    type="GATO"
                    key={12}
                />
            </PetCardsContainer>
        </Container>
    );
}
