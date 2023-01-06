import { useEffect } from 'react';

import { PetsContext } from '../../contexts/pets.context';
import { useContext } from 'react';
import { PetEditForm } from '../PetEditForm';

interface IPetEditProps {
  petId: string;
}

export function PetEdit({ petId }: IPetEditProps) {
  const { paramsPet, pets } = useContext(PetsContext);

  useEffect(() => {
    paramsPet(petId);
  }, []);

  return (
    <>
      {pets.map((pet) => (
        <div key={pet.id}>
          <PetEditForm data={pet} />
        </div>
      ))}
    </>
  );
}
