import { Container, Breed, Image, PetName, PhoneNumber } from "./style";

import { maskPhoneNumber } from "../../utils/maks/phone";

import CatSvg from "../../assets/catCard.svg";
import DogSvg from "../../assets/dogCard.svg";

const species = {
    GATO: CatSvg,
    CACHORRO: DogSvg,
};

export function PetCard({ id, name, breed, phoneNumber, type }) {
    return (
        <Container>
            <Image
                src={species[type]}
                alt=""
            />

            <PetName>{name}</PetName>
            <Breed>{breed}</Breed>

            <PhoneNumber>{maskPhoneNumber(phoneNumber)}</PhoneNumber>
        </Container>
    );
}
