import { useEffect, useState } from 'react';
import { LoadingMessage, PetsPageContainer } from './styles';

import { Pet } from '../../types/Pet';
import { api } from '../../hooks/useApi';

const PetsPage = () => {
  const [allPets, setAllPets] = useState<Pet[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllPets = async () => {
      setIsLoading(true);
      try {

        const pets =  await api.get('/pets');

        setAllPets(pets.data);

        setIsLoading(false);

      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getAllPets();
  }, []);

  return (
    <PetsPageContainer>
      {isLoading && <LoadingMessage>Carregando...</LoadingMessage>}

      {allPets && allPets.map((pet) => (
        <div key={pet.id}>
          <h1>{pet.name}, {pet.catOrDog}</h1>
          <p>{pet.age} ano(s)</p>
          <p>{pet.breed}</p>
          <p>{pet.owner}</p>
          <p>{pet.ownerContact}</p>
        </div>
      ))}
    </PetsPageContainer>
  );
};

export default PetsPage;
