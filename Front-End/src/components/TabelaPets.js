import React, { useEffect, useState } from 'react';
import { fetchPets, editPet, deletePet } from '../Api/Api';
import TabelaPetsRow from './TabelaPetRow/TabelaPetRow';
import './style/TabelaPets.css';
import PetForm from './PetForm/PetForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PetDetails from './PetDetails/PetDetails';

function TabelaPets() {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    const getPets = async () => {
      try {
        const petsData = await fetchPets();
        setPets(petsData);
        setIsLoading(false);
        setIsDataLoaded(true);
      } catch (error) {
        setError('Erro ao buscar os pets. Por favor, tente novamente mais tarde.');
        setIsLoading(false);
      }
    };

    getPets();
  }, []);

  const handleEditPet = async (petId, newData) => {
    try {
      await editPet(petId, newData);
      setPets((prevPets) =>
        prevPets.map((pet) => (pet.id === petId ? { ...pet, ...newData } : pet))
      );
      toast.success('Pet atualizado com sucesso.', { autoClose: 3000 });
    } catch (error) {
      toast.error('Erro ao editar pet. Por favor, tente novamente mais tarde.', { autoClose: 3000 });
    }
  };

  const handleDeletePet = async (petId) => {
    try {
      await deletePet(petId);
      setPets((prevPets) => {
        const updatedPets = prevPets.filter((pet) => pet.id !== petId);
        if (prevPets.length === updatedPets.length) {
          toast.error('O pet já foi removido.', { autoClose: 3000 });
        } else {
          toast.success('Pet removido com sucesso.', { autoClose: 3000 });
        }
        return updatedPets;
      });
    } catch (error) {
      toast.error('Erro ao excluir pet. Por favor, tente novamente mais tarde.', { autoClose: 3000 });
    }
    console.log('Handle delete pet called');
  };

  const handleViewPet = (pet) => {
    setSelectedPet(pet);
  };

  if (isLoading) {
    return <p>Carregando pets...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <ToastContainer />
      <h1 style={{ color: 'white' }}>Lista de Pets</h1>
      {pets.length === 0 ? (
        <p>Nenhum pet encontrado.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Espécie</th>
              <th>Raça</th>
              <th>Dono</th>
              <th>Contato</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => (
              <TabelaPetsRow
                key={pet.id}
                nome={pet.nome}
                idade={pet.idade}
                especie={pet.especie}
                raca={pet.raca}
                dono={pet.dono}
                contato={pet.contato}
                onRemove={() => handleDeletePet(pet.id)}
                onEdit={(newData) => handleEditPet(pet.id, newData)}
                onView={() => handleViewPet(pet)} 
              />
            ))}
          </tbody>
        </table>
      )}
      {isDataLoaded && (
        <PetForm pets={pets} setPets={setPets} />
      )}
      {selectedPet && ( 
        <PetDetails pet={selectedPet} onClose={() => setSelectedPet(null)} />
      )}
    </div>
  );
}

export default TabelaPets;
