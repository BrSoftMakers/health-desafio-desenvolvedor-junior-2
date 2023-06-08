/* eslint-disable react/jsx-filename-extension */
import { node } from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';

import toastMessage from '../helpers/toastMessage';
import {
  listAllPets, registerPet, removePet, updatePet,
} from '../routes/utils/pet.routes';
import AppContext from './app.context';

function AppProvider ({ children }) {
  const [pets, setPets] = useState([]);
  const [petId, setPetId] = useState('');

  const getPets = async () => {
    await listAllPets()
      .then(({ data }) => setPets(data));
  };

  useEffect(() => {
    getPets();
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

  const update = async (data) => {
    try {
      await updatePet(petId, data);
      toastMessage('Atualização bem sucedida', 'success');
      getPets();
    } catch (error) {
      toastMessage('Hmmm... isso não pode ser bom', 'error');
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
    setPetId,
    update,
    getPets,
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
