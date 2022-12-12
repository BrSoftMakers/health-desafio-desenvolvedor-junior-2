import PropTypes from 'prop-types';
import React, { useCallback, useContext } from 'react';
import { RiDeleteBin2Fill, RiEdit2Fill } from 'react-icons/ri';
import { remove } from '../../../../api/pet';
import { PetContext } from '../../../../context/PetContext';
import Button from '../../../Button';
import './styles.css';

const mapPetAttribute = (pet, key, value) => {
  const speciesDict = { cat: 'Gato', dog: 'Cachorro' };

  return key === 'species'
    ? <td key={`pet-${pet.id}-${key}`}>{speciesDict[value]}</td>
    : <td key={`pet-${pet.id}-${key}`}>{value}</td>;
};

export default function TableBodyRow({ pet }) {
  const { listPets, setEditId, setPetData, defaultData } = useContext(PetContext);

  const handleEditButtonClick = useCallback(
    (editData) => {
      const { id, ...petData } = editData;

      setEditId(id);
      setPetData(petData);
    },
    [setEditId, setPetData],
  );

  const handleDeleteButtonClick = useCallback(
    async (idToDelete) => {
      await remove(idToDelete);

      await listPets();

      setPetData(defaultData);
    },
    [defaultData, listPets, setPetData],
  );

  return (
    <tr>
      {
        Object.entries(pet)
          .map(([key, value]) => mapPetAttribute(pet, key, value))
      }
      <td>
        <Button
          text={<RiEdit2Fill />}
          onClick={() => handleEditButtonClick(pet)}
          modifier="button_sm"
          al="Editar"
        />
      </td>
      <td>
        <Button
          text={<RiDeleteBin2Fill />}
          onClick={() => handleDeleteButtonClick(pet.id)}
          modifier="button_sm"
          al="Remover"
        />
      </td>
    </tr>
  );
}
TableBodyRow.propTypes = {
  pet: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};
