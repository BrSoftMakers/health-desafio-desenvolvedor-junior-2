import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles/PetDetails.css';

function PetDetails() {
  const { id } = useParams();
  const [pet, setPet] = useState({});
  const [editFormData, setEditFormData] = useState({
    nome: '',
    idade: 0,
    tipo: '',
    raca: '',
    nome_dono: '',
    telefone_dono: '',
  });

  useEffect(() => {
    fetchPetDetails();
  }, []);

  const fetchPetDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/visualizar-pet/${id}`);
      setPet(response.data);
      setEditFormData(response.data);
    } catch (error) {
      console.error('Erro ao buscar detalhes do pet:', error);
    }
  };

  const handleEditInputChange = (event) => {
    const { name, value } = event.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`http://localhost:3001/api/editar-pet/${id}`, editFormData);
      alert('Pet atualizado com sucesso!');
      fetchPetDetails();
    } catch (error) {
      console.error('Erro ao atualizar o pet:', error);
      alert('Erro ao atualizar o pet.');
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/api/excluir-pet/${id}`);
      alert('Pet excluído com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir o pet:', error);
      alert('Erro ao excluir o pet.');
    }
  };

  return (
    <div className="pet-details">
      <div className="pet-info">
        <h2>Detalhes do Pet</h2>
        <p><strong>Nome:</strong> {pet.nome}</p>
        <p><strong>Idade:</strong> {pet.idade} ano(s)</p>
        <p><strong>Tipo:</strong> {pet.tipo}</p>
        <p><strong>Raça:</strong> {pet.raca}</p>
        <p><strong>Nome do Dono:</strong> {pet.nome_dono}</p>
        <p><strong>Telefone do Dono:</strong> {pet.telefone_dono}</p>
      </div>

      <div className="edit-form">
        <h3>Editar Pet</h3>
        <form onSubmit={handleEditSubmit}>
          <label>Nome:</label>
          <input type="text" name="nome" value={editFormData.nome} onChange={handleEditInputChange} required />

          <label>Idade:</label>
          <input type="number" name="idade" value={editFormData.idade} onChange={handleEditInputChange} required />

          <label>Tipo:</label>
          <input type="text" name="tipo" value={editFormData.tipo} onChange={handleEditInputChange} required />

          <label>Raça:</label>
          <input type="text" name="raca" value={editFormData.raca} onChange={handleEditInputChange} />

          <label>Nome do Dono:</label>
          <input type="text" name="nome_dono" value={editFormData.nome_dono} onChange={handleEditInputChange} required />

          <label>Telefone do Dono:</label>
          <input type="tel" name="telefone_dono" value={editFormData.telefone_dono} onChange={handleEditInputChange} maxLength="18" required />

          
          <button type="submit">Salvar Edições</button>
        </form>
      </div>

      <div className="delete-section">
        <h3>Excluir Pet</h3>
        <button onClick={handleDelete}>Excluir Pet</button>
      </div>
    </div>
  );
}

export default PetDetails;
