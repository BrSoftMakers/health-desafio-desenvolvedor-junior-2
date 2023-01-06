import { useContext, useEffect } from 'react';
import { PetsContext } from '../../contexts/pets.context';
import { PetInfoCard } from '../PetInfoCard';
import { Loading } from '../Loading';
import { ContainerHome, ContainerPets, ContentPets } from './styled';

export function PetsCards() {
  const { isLoading, pets, getPet } = useContext(PetsContext);
  const nameUser = localStorage.getItem('nameUser');

  useEffect(() => {
    getPet();
  }, [getPet]);

  return (
    <>
      <ContainerHome>
        <p> Bem vindo: {nameUser}</p>
        <span>Pets que estão no nosso espaço:</span>
        <ContainerPets>
          {isLoading && <Loading />}
          <ContentPets>
            {pets.map((pet) => (
              <div key={pet.id}>
                <PetInfoCard data={pet} />
              </div>
            ))}
          </ContentPets>
        </ContainerPets>
      </ContainerHome>
    </>
  );
}
