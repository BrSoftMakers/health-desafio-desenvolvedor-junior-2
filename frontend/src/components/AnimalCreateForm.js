import React, { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import "./AnimalCreateForm.css"; // Importando o arquivo CSS

const AnimalCreateForm = () => {
  const history = useNavigate();
  const [animalData, setAnimalData] = useState({
    nome: '',
    idade: '',
    tipo: '',
    raca: '',
    nome_dono: '',
    telefone_dono: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnimalData({ ...animalData, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await setAnimalData({ ...animalData });
      const response = await api.createAnimal(animalData);
      handleBack();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

    const handleBack = () => {
        history("/animals");
    }

  return (
    <div className="create-form-wrapper">
      <h1>Criar novo animal</h1>
      <div className="create-form-container">
          <form className="create-form" action="/api/animals/create" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nome">Nome</label>
              <input type="text" name="nome" id="nome" value={animalData.nome} onChange={handleChange} />
              <label htmlFor="idade">Idade</label>
              <input type="number" name="idade" id="idade" value={animalData.idade} onChange={handleChange} />
              <label htmlFor="tipo">Espécie</label>
              <input type="text" name="tipo" id="tipo" value={animalData.tipo} onChange={handleChange} />
              <label htmlFor="raca">Raça</label>
              <input type="text" name="raca" id="raca" value={animalData.raca} onChange={handleChange} />
              <label htmlFor="nome_dono">Nome do dono</label>
              <input type="text" name="nome_dono" id="nome_dono" value={animalData.nome_dono} onChange={handleChange} />
              <label htmlFor="telefone_dono">Telefone do dono</label>
              <input type="text" name="telefone_dono" id="telefone_dono" value={animalData.telefone_dono} onChange={handleChange} />
              <div className="navButtons">
                  <button style={{backgroundColor: "#4caf50"}} type="submit">Criar</button>
                  <button style={{backgroundColor: "gray"}} onClick={handleBack}>Voltar</button>
              </div>
            </div>
          </form>
      </div>
    </div>
  )
}

export default AnimalCreateForm;
