import PropTypes from 'prop-types';
import React, { createContext, useCallback, useMemo, useState } from 'react';
import { list } from '../api/pet';
import serializePet from '../helpers/serializePet';

const PetContext = createContext();

function PetProvider({ children }) {
  const defaultData = useMemo(() => ({
    name: '',
    age: '',
    species: null,
    breed: '',
    owner: '',
    phone: '',
  }), []);

  const [petData, setPetData] = useState(defaultData);
  const [pets, setPets] = useState([]);
  const [editId, setEditId] = useState(0);

  const listPets = useCallback(async () => {
    const { data } = await list();

    setPets(data.pets.map(serializePet));
  }, []);

  const contextValue = useMemo(
    () => ({
      defaultData,
      petData,
      setPetData,
      pets,
      listPets,
      editId,
      setEditId,
    }),
    [defaultData, editId, listPets, petData, pets],
  );

  return (
    <PetContext.Provider value={contextValue}>
      {children}
    </PetContext.Provider>
  );
}

PetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PetProvider, PetContext };
