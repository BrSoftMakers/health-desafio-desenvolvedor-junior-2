import React, { useContext, useEffect } from 'react';
import { PetContext } from '../../../context/PetContext';
import TableBodyRow from './TableBodyRow';

export default function TableBody() {
  const {
    pets,
    listPets,
  } = useContext(PetContext);

  useEffect(() => {
    listPets();
  }, [listPets]);

  return (
    <tbody>
      {
        pets.length > 0 && pets.map((pet) => (
          <TableBodyRow key={`pet-${pet.id}-row`} pet={pet} />
        ))
      }
    </tbody>
  );
}
