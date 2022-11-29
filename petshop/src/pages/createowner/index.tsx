import axios from "axios";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import { urlBase } from "../../utils/urlBase";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function CreateOwner() {
  const [tutor, setTutor] = useState("");
  const [telefone, setTelefone] = useState<number>();

  const notify = () => toast("Dono Cadastrado com sucesso!")

  const addTutor = (tutor: string) => {
    setTutor(tutor);
  };
  const addTelefone = (telefone: number) => {
    setTelefone(telefone);
  };

  const upload = async () => {
    await axios.post(urlBase + "add/owner/", {
      data: {
        nome: tutor,
        telefone: telefone,
      },
    });
  };

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
                id="tutor"
                type="text"
                className="validate"
                onChange={({ target }) => {
                  addTutor(target.value);
                }}
              />
              <label htmlFor="tutor" className="active">
                Nome do Tutor
              </label>
            </div>
            <div className="input-field col s5">
              <input
                id="telefone"
                type="number"
                className="validate"
                onChange={({ target }) => {
                  addTelefone(parseInt(target.value));
                }}
              />
              <label htmlFor="telefone" className="active">
                Número de telefone
              </label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            onClick={async () => {
              await upload();
              notify();
            }}
          >
            Salvar
            <i className="material-icons right">send</i>
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
