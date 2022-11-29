import axios from "axios";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import NavBar from "../../components/NavBar";
import { urlBase } from "../../utils/urlBase";

type owner = {
  id: number;
  nomeDono: string;
  telefone: number;
};

export default function CreatePet() {
  const [petNome, setPetNome] = useState("");
  const [idade, setIdade] = useState<number>();
  const [especie, setEspecie] = useState("");
  const [raca, setRaca] = useState("");
  const [tutor, setTutor] = useState([]);
  const [tutorId, setTutorID] = useState<number>();

  const notify = () => toast("Pet Cadastrado com sucesso!");

  const addPetNome = (nome: string) => {
    setPetNome(nome);
  };

  const addIdade = (idade: number) => {
    setIdade(idade);
  };

  const addEspecie = (especie: string) => {
    setEspecie(especie);
  };

  const addRaca = (raca: string) => {
    setRaca(raca);
  };

  const upload = async () => {
    await axios.post(urlBase + "add/pet", {
      data: {
        nome: petNome,
        idade: idade,
        especie: especie,
        raca: raca,
        dono: tutorId,
      },
    });
  };

  const getTutor = async () => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    await axios
      .get(`${urlBase}owner`, config)
      .then(({ data }) => setTutor(data));
  };

  useEffect(() => {
    getTutor();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="row">
        <form
          className="col s10"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="row">
            <div className="input-field col s5">
              <input
                placeholder="Nome"
                id="nome"
                type="text"
                className="validate"
                value={petNome}
                onChange={({ target }) => {
                  addPetNome(target.value);
                }}
              />
              <label htmlFor="nome" className="active">
                Nome
              </label>
            </div>
            <div className="input-field col s5">
              <input
                id="idade"
                type="number"
                className="validate"
                placeholder=""
                value={idade}
                onChange={({ target }) => {
                  addIdade(parseInt(target.value));
                }}
              />
              <label htmlFor="idade" className="active">
                idade
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s5">
              <input
                id="especie"
                type="text"
                className="validate"
                value={especie}
                onChange={({ target }) => {
                  addEspecie(target.value);
                }}
              />
              <label htmlFor="especie" className="active">
                Espécie
              </label>
            </div>
            <div className="input-field col s5">
              <input
                id="raca"
                type="text"
                className="validate"
                value={raca}
                onChange={({ target }) => {
                  addRaca(target.value);
                }}
              />
              <label htmlFor="raca" className="active">
                Raça
              </label>
            </div>
          </div>
          <label>Tutor</label>
          <select
            className="browser-default"
            onChange={({ target }) => {
              setTutorID(parseInt(target.value));
            }}
            value={""}
          >
            <option value="" disabled selected>
              tutor
            </option>
            {tutor.map((dono: owner, key) => {
              return (
                <option
                  key={key}
                  value={dono.id}
                >{`${dono.id} - ${dono.nomeDono}`}</option>
              );
            })}
          </select>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            onClick={async () => {
              await upload();
              notify();
              setPetNome("");
              setEspecie("");
              setRaca("");
              setIdade(0);
            }}
          >
            Salvar
            <i className="material-icons right">send</i>
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
