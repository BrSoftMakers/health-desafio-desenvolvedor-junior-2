import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { LoadingMessage, PetCardsWrapper, PetsPageContainer } from './styles';

import { Pet } from '../../types/Pet';
import { api } from '../../hooks/useApi';

const PetsPage = () => {
  const [allPets, setAllPets] = useState<Pet[]>();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getAllPets = async () => {
      setIsLoading(true);
      try {
        const pets = await api.get('/pets');

        setAllPets(pets.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getAllPets();
  }, []);

  const handleDeletePet = async (id: number) => {
    try {
      if (
        window.confirm('Você irá apagar um pet. Deseja continuar?') === true
      ) {
        await api.delete(`/pets/${id}`);

        const remainingPets = allPets?.filter((pet) => {
          return pet.id !== id;
        });

        setAllPets(remainingPets);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditPet = (id: number) => {
    navigate(`/edit-pet/${id}`);
  };

  return (
    <PetsPageContainer>
      {isLoading && <LoadingMessage>Carregando...</LoadingMessage>}
      <PetCardsWrapper>
        {allPets &&
          allPets.map((pet) => (
            <div key={pet.id}>
              <h3>
                {pet.name} {pet.catOrDog === 'Cachorro' ? '🐶' : '🐱'}
              </h3>
              <p>
                <strong>Idade:</strong> {pet.age} ano(s)
              </p>
              <p>
                <strong>Raça:</strong> {pet.breed}
              </p>
              <p>
                <strong>Tutor:</strong> {pet.owner}
              </p>
              <p>
                <strong>Contato:</strong> {pet.ownerContact}
              </p>

              <div className="buttons-wrapper">
                <button
                  className="edit-button"
                  onClick={() => handleEditPet(Number(pet.id))}
                >
                  Editar
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeletePet(Number(pet.id))}
                >
                  Apagar
                </button>
              </div>
            </div>
          ))}
      </PetCardsWrapper>
    </PetsPageContainer>
  );
};

export default PetsPage;
