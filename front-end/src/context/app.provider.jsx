/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useMemo, useState } from 'react';
import { node } from 'prop-types';

import AppContext from './app.context';
import { listAllPets, registerPet, removePet } from '../routes/utils/pet.routes';
import toastMessage from '../helpers/toastMessage';

function AppProvider({ children }) {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    listAllPets()
      .then(({ data }) => setPets(data));
  }, []);

  const registerPetService = async (pet) => {
    try {
      const { data } = await registerPet(pet);
      setPets([...pets, data]);
      toastMessage('Pet cadastrado com sucesso', 'success');
    } catch (error) {
      toastMessage('Ops! Algo de errado não está certo...', 'error');
    }
  };

  const deletePet = async (id) => {
    try {
      await removePet(id);
      const t = pets.filter((pet) => pet.id !== id);
      setPets(t);
      toastMessage('Pet removido!', 'success');
    } catch (error) {
      toastMessage('Hmmm... algo de estranho aconteceu', 'error');
    }
  };

  const context = useMemo(() => ({
    pets,
    registerPetService,
    deletePet,
  }), [pets]);

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

AppProvider.propTypes = {
  children: node.isRequired,
};
