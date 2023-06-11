import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../utils/api";
import "./AnimalUpdateForm.css";

const AnimalUpdateForm = () => {
  const history = useNavigate();  
  const { id } = useParams();
  const [animal, setAnimal] = useState({
    nome: "",
    idade: "",
    tipo: "",
    raca: "",
    nome_dono: "",
    telefone_dono: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getAnimalById(id);
        setAnimal(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.updateAnimal(id, animal);
      console.log(response);
      handleBack();
    } catch (error) {
      console.log(error);
    }
  };

  if (!animal) {
    return <div>Loading...</div>;
  }

  const handleBack = () => {
    history("/animals");
  }

  return (
    <div className="update-wrapper">
      <h1>Atualizar animal</h1>
      <form
        action="/api/animals"
        method="POST"
        onSubmit={handleSubmit}
        className="update-container"
      >
        <div className="update">
          <label htmlFor="nome" className="update-label">
            Nome
          </label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={animal.nome}
            onChange={(event) =>
              setAnimal({ ...animal, nome: event.target.value })
            }
            className="update-input"
          />

          <label htmlFor="idade" className="update-label">
            Idade
          </label>
          <input
            type="number"
            name="idade"
            id="idade"
            value={animal.idade}
            onChange={(event) =>
              setAnimal({ ...animal, idade: event.target.value })
            }
            className="update-input"
          />

          <label htmlFor="tipo" className="update-label">
            Espécie
          </label>
          <input
            type="text"
            name="tipo"
            id="tipo"
            value={animal.tipo}
            onChange={(event) =>
              setAnimal({ ...animal, tipo: event.target.value })
            }
            className="update-input"
          />

          <label htmlFor="raca" className="update-label">
            Raça
          </label>
          <input
            type="text"
            name="raca"
            id="raca"
            value={animal.raca}
            onChange={(event) =>
              setAnimal({ ...animal, raca: event.target.value })
            }
            className="update-input"
          />

          <label htmlFor="nome_dono" className="update-label">
            Nome do dono
          </label>
          <input
            type="text"
            name="nome_dono"
            id="nome_dono"
            value={animal.nome_dono}
            onChange={(event) =>
              setAnimal({ ...animal, nome_dono: event.target.value })
            }
            className="update-input"
          />

          <label htmlFor="telefone_dono" className="update-label">
            Telefone do dono
          </label>
          <input
            type="text"
            name="telefone_dono"
            id="telefone_dono"
            value={animal.telefone_dono}
            onChange={(event) =>
              setAnimal({ ...animal, telefone_dono: event.target.value })
            }
            className="update-input"
          />

          <div className="update-buttons">
          <button type="submit" className="update-button">
            Atualizar
          </button>
          
            <button style={{backgroundColor: "gray"}} className="update-button" onClick={handleBack}>
                Voltar
            </button>
          </div>
        </div>
      </form>

    </div>
  );
};

export default AnimalUpdateForm;
