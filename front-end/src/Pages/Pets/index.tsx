import { useEffect } from "react";
import { Header } from "../../components/Header";
import { ModalDelete } from "../../components/ModalDeletePet";
import { ModalEdit } from "../../components/ModalEditPet";
import { PetCard } from "../../components/PetCard/";
import { iPet } from "../../components/PetCard/interfaces";
import { usePetContext } from "../../contexts/PetContext";
import api from "../../services/api";
import { PetsStyled } from "./style";

export const Pets = () => {
  const { setPets, deleteModal, editModal, pets, changeLi } = usePetContext();

  useEffect(() => {
    api.get("/pets").then((response) => {
      setPets(response.data);
    });
  }, [changeLi]);

  return (
    <PetsStyled>
      {deleteModal && <ModalDelete />}
      {editModal && <ModalEdit />}
      <Header />
      {!pets.length ? (
        <div className="without_pets">
          <p>Nenhum pet cadastrado até o momento :/</p>
        </div>
      ) : (
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
      )}
    </PetsStyled>
  );
};
