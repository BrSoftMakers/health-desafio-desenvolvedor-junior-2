import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import { urlBase } from "../../utils/urlBase";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

type owner = {
  id: number;
  nomeDono: string;
  telefone: number;
};

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

export default function Update() {
  const { id } = useParams();
  const [petNome, setPetNome] = useState("");
  const [idade, setIdade] = useState<number>();
  const [especie, setEspecie] = useState("");
  const [raca, setRaca] = useState("");
  const [tutores, setTutores] = useState([]);
  const [tutor, setTutor] = useState([]);
  const [tutorId, setTutorID] = useState<number>();

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

  const update = async () => {
    await axios.put(urlBase + "update/pet/", {
      data: {
        id: id,
        nome: petNome,
        idade: idade,
        especie: especie,
        raca: raca,
        dono: tutorId,
      },
    });
  };

  const getPet = async () => {
    await axios.get(urlBase + `pets/${id}`).then(({ data }) => {
      const { nome, idade, especie, raca, dono } = data;
      const { id, nomeDono, telefone } = dono;
      setPetNome(nome);
      setIdade(idade);
      setEspecie(especie);
      setRaca(raca);
      setTutor(nomeDono);
      setTutorID(id);
    });
  };

  const notify = () => toast("Registro atualizado com sucesso!");

  const getTutor = async () => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    await axios
      .get(`${urlBase}owner`, config)
      .then(({ data }) => setTutores(data));
  };

  useEffect(() => {
    getTutor();
    getPet();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="row">
        <form
          className="col s10"
          onSubmit={(event) => {
            // event.preventDefault();
          }}
        >
          <div className="row">
            <div className="input-field col s5">
              <input
                placeholder="Nome"
                id="nome"
                type="text"
                value={petNome}
                className="validate"
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
                value={idade}
                className="validate"
                placeholder=""
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
                value={especie}
                className="validate"
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
                value={raca}
                className="validate"
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
          >
            <option>{tutor}</option>
            {tutores.map((dono: owner, key) => {
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
              await update();
              notify();
            }}
          >
            Salvar
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
