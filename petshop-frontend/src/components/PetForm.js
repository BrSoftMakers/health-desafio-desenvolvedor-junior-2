import React, { useState } from 'react';
import axios from 'axios';
import './styles/PetForm.css';

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
    <div className='form-container'>
      <h1 className='titulo' >Adicionar Pet</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label className='label'>Nome:</label>
        <input className='input' type="text" name="nome" value={formData.nome} onChange={handleInputChange} required />

        <label className='label'>Idade:</label>
        <input className='input' type="number" name="idade" value={formData.idade} onChange={handleInputChange} required />

        <label className='label'>Tipo:</label>
        <input className='input' type="text" name="tipo" value={formData.tipo} onChange={handleInputChange} required />

        <label className='label'>Raça:</label>
        <input className='input' type="text" name="raca" value={formData.raca} onChange={handleInputChange} />

        <label className='label'>Nome do Dono:</label>
        <input className='input' type="text" name="nome_dono" value={formData.nome_dono} onChange={handleInputChange} required />

        <label className='label'>Telefone do Dono:</label>
        <input className='input' type="tel" name="telefone_dono" value={formData.telefone_dono} onChange={handleInputChange} maxLength="18" required />

        <button className='button' type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default PetForm;