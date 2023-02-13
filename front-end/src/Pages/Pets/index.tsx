import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { PetCard } from "../../components/PetCard/";
import { iPet } from "../../components/PetCard/interfaces";
import api from "../../services/api";
import { PetsStyled } from "./style";

export const Pets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get("/pets").then((response) => {
      console.log(response.data);
      setPets(response.data);
    });
  }, []);

  return (
    <PetsStyled>
      <Header />
      <ul>
        {pets.map((pet: iPet) => (
          <PetCard
            age={pet.age}
            breed={pet.breed}
            id={pet.id}
            name={pet.name}
            phoneNumber={pet.phoneNumber}
            species={pet.species}
            tutorName={pet.tutorName}
            image={pet.image}
            key={pet.id}
          />
        ))}
      </ul>
    </PetsStyled>
  );
};
