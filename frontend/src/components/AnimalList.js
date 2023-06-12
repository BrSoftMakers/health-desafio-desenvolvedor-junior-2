import React, { useEffect, useState } from "react";
import api from "../utils/api";
import "./AnimalList.css";

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getAnimals();
        console.log(response);
        if (Array.isArray(response)) {
          setAnimals(response);
        } else {
          console.log("A resposta da API não é um array:", response);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table-wrapper">
      <div>
          <div className="create-button-container">
            <h1>Animais do PetShop</h1>
            <button className="create-button" onClick={() => window.location.href = "/animals/create"}>Criar novo animal</button>
          </div>

          <table className="animal-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Espécie</th>
                <th>Raça</th>
                <th>Nome do dono</th>
                <th>Telefone do dono</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {animals.map((animal) => (
                <tr key={animal.id}>
                  <td>{animal.nome}</td>
                  <td>{animal.idade}</td>
                  <td>{animal.tipo}</td>
                  <td>{animal.raca}</td>
                  <td>{animal.nome_dono}</td>
                  <td>{animal.telefone_dono}</td>
                  <td >
                    <button onClick={() => window.location.href = `/animals/${animal.id}/edit`}>Editar</button>
                    <button style={{backgroundColor: "#f44336"}} onClick={() => window.location.href = `/animals/${animal.id}/delete`}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
 
      </div>
    </div>
  );
};

export default AnimalList;
