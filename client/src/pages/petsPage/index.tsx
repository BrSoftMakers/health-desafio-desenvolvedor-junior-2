import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { petType } from "../../types/petTypes";
import * as C from "./styles";
import { api } from "../../api";
import { PetContainer } from "../../components/features/petContainer ";
import { UpdateModal } from "../../components/features/updateModal";
export const PetsPage = () => {
  const [petList, setPetList] = useState<petType[]>([]);
  const [currentPet, setCurrentPet] = useState<petType>({
    dono_nome: "",
    idade: 0,
    dono_telefone: "",
    nome: "",
    raca: "",
    tipo: "",
  });
  const [showUpdateModal, setshowUpdateModal] = useState<boolean>(false);
  const deletePet = async (id: number) => {
    console.log(id);
    try {
      await api.deletePet(id);
    } catch (error) {
      console.error("Error deleting pet:", error);
    }

    updateList();
  };
  const editpet = async (id: number) => {
    console.log(id);
    setshowUpdateModal(true);
    try {
      setCurrentPet(petList.find((pet) => pet.id === id) ?? currentPet);
    } catch (error) {
      console.error("Error edit  pet:", error);
    }

    updateList();
  };

  const updateList = async () => {
    try {
      const pets = await api.listPets();
      setPetList(pets);
    } catch (error) {
      console.error("Error updating pet list:", error);
    }
  };

  useEffect(() => {
    updateList();
  }, []);

  return (
    <C.Container>
      {showUpdateModal ? (
        <UpdateModal
          showModal={() => {
            setshowUpdateModal(false);
            updateList();
          }}
          currentPet={currentPet}
        />
      ) : (
        <>
          <h1>Pets</h1>
          <div className="petslistContainer">
            {petList.length > 0 ? (
              petList.map((pet) => (
                <PetContainer
                  editClickHandler={() => editpet(pet.id ?? 0)}
                  deleteClickHandler={() => deletePet(pet.id ?? 0)}
                  key={pet.id}
                  pet={pet}
                />
              ))
            ) : (
              <p>Não há animais de estimação cadastrados.</p>
            )}
          </div>
        </>
      )}
    </C.Container>
  );
};
