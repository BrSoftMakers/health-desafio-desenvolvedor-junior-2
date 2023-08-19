import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PetList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/listar-pets');
      setPets(response.data);
    } catch (error) {
      console.error('Erro ao buscar pets:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Pets</h2>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            <Link to={`/pets/${pet.id}`}>
              {pet.nome} - {pet.tipo}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PetList;
