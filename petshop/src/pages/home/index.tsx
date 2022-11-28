import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import axios from "axios";
import { urlBase } from "../../utils/urlBase";

type pet = {
  id: number;
  nome: string;
  idade: number;
  especie: string;
  raca: string;
  dono: {
    donoId: number;
    nome: string;
    telefone: string;
  };
};

export default function Home() {
  const [pets, setPets] = useState<[]>([]);

  const petRequest = async () => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    await axios.get(`${urlBase}pets`, config).then(({ data }) => setPets(data));
  };

  const deletePet = async (petId: number) => {
    await axios.delete(urlBase + "remove/pet", {
      data: {
        id: petId,
      },
    });
    petRequest();
  };

  useEffect(() => {
    petRequest();
  }, []);

  console.log(pets);

  return (
    <>
      <NavBar />
      <div>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Espécie</th>
              <th>Raça</th>
              <th>Tutor</th>
              <th>Contato</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet: pet, key) => {
              return (
                <tr key={key}>
                  <td>{pet.nome}</td>
                  <td>{pet.idade}</td>
                  <td>{pet.especie}</td>
                  <td>{pet.raca}</td>
                  <td>{pet.dono.nome}</td>
                  <td>{pet.dono.telefone}</td>
                  <td>
                    <a className="btn-floating btn-medium waves-effect waves-light light">
                      <i className="material-icons">edit</i>
                    </a>
                    <br />
                    <p></p>
                    <a
                      className="btn-floating btn-medium waves-effect waves-light light"
                      onClick={() => {
                        deletePet(pet.id);
                      }}
                    >
                      <i className="material-icons">delete</i>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
