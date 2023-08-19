import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PetList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await axios.get('http://localhost:3001/listar-pets');
      setPets(response.data);
    } catch (error) {
      console.error('Erro ao buscar pets:', error);
    }
  };

  const deletePet = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/excluir-pet/${id}`);
      fetchPets();
    } catch (error) {
      console.error('Erro ao excluir pet:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Pets</h2>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            {pet.nome} - {pet.tipo}
            <button onClick={() => deletePet(pet.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PetList;
