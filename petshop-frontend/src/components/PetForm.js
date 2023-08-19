import React, { useState } from 'react';
import axios from 'axios';

function PetForm() {
  const [formData, setFormData] = useState({
    nome: '',
    idade: 0,
    tipo: '',
    raca: '',
    nome_dono: '',
    telefone_dono: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:3001/api/adicionar-pet', formData);
      alert('Pet adicionado com sucesso!');
      setFormData({
        nome: '',
        idade: 0,
        tipo: '',
        raca: '',
        nome_dono: '',
        telefone_dono: '',
      });
    } catch (error) {
      console.error('Erro ao adicionar o pet:', error);
      alert('Erro ao adicionar o pet.');
    }
  };

  return (
    <div>
      <h2>Adicionar Pet</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} required />

        <label>Idade:</label>
        <input type="number" name="idade" value={formData.idade} onChange={handleInputChange} required />

        <label>Tipo:</label>
        <input type="text" name="tipo" value={formData.tipo} onChange={handleInputChange} required />

        <label>Raça:</label>
        <input type="text" name="raca" value={formData.raca} onChange={handleInputChange} />

        <label>Nome do Dono:</label>
        <input type="text" name="nome_dono" value={formData.nome_dono} onChange={handleInputChange} required />

        <label>Telefone do Dono:</label>
        <input type="tel" name="telefone_dono" value={formData.telefone_dono} onChange={handleInputChange} maxLength="18" required />

        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default PetForm;
