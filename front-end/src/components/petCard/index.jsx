import { Container, Breed, Image, PetName, PhoneNumber } from "./style";

import Cat_DogSvg from "../../assets/Cat_Dog.svg";

export function PetCard({ name, breed, phoneNumber, type }) {
    return (
        <Container>
            <Image
                src={Cat_DogSvg}
                alt=""
            />

            <PetName>{name}</PetName>
            <Breed>{breed}</Breed>

            <PhoneNumber>{phoneNumber}</PhoneNumber>
        </Container>
    );
}
