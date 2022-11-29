import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import axios from "axios";
import { urlBase } from "../../utils/urlBase";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type pet = {
  id: number;
  nome: string;
  idade: number;
  especie: string;
  raca: string;
  dono: {
    donoId: number;
    nomeDono: string;
    telefone: string;
  };
};

export default function Home() {
  const [pets, setPets] = useState<[]>([]);

  const notify = () => toast("Registro deletado com sucesso!");

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
                  <td>{pet.dono.nomeDono}</td>
                  <td>{pet.dono.telefone}</td>
                  <td>
                    <Link
                      className="btn-floating btn-medium waves-effect waves-light light"
                      to={`/update/${pet.id}`}
                    >
                      <i className="material-icons">edit</i>
                    </Link>
                    <br />
                    <p></p>
                    <a
                      className="btn-floating btn-medium waves-effect waves-light light"
                      onClick={() => {
                        deletePet(pet.id);
                        notify();
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
        <ToastContainer />
      </div>
    </>
  );
}
