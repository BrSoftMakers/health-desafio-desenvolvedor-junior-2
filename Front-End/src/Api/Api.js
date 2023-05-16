import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081', // URL base da sua API
});

export const fetchPets = async () => {
  try {
    const response = await api.get('/');
    return response.data.pets;
  } catch (error) {
    console.error('Erro ao buscar os pets:', error);
    throw error;
  }
};

export const registerPet = async (petData) => {
  try {
    const response = await api.post('/register', petData);
    return response.data.pet;
  } catch (error) {
    console.error('Erro ao registrar o pet:', error);
    throw error;
  }
};

export const editPet = async (petId, petData) => {
  try {
    const response = await api.put(`/editar/${petId}`, petData);
    return response.data.pet;
  } catch (error) {
    console.error('Erro ao editar o pet:', error);
    throw error;
  }
};

export const getPetById = async (petId) => {
  try {
    const response = await api.get(`/pets/${petId}`);
    return response.data.pet;
  } catch (error) {
    console.error('Erro ao buscar o pet:', error);
    throw error;
  }
};

export const deletePet = async (petId) => {
  try {
    const response = await api.delete(`/pets/${petId}`);
    return response.data.pet;
  } catch (error) {
    console.error('Erro ao apagar o pet:', error);
    throw error;
  }
};
