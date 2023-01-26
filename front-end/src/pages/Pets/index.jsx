/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import Table from '../../components/Table';
import AppContext from '../../context/app.context';

function Pets() {
  const { registerPetService } = useContext(AppContext);
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    registerPetService(data);
  };

  return (
    <>
      <aside className="pet-form-container">
        <h1>Cadastro de Pet</h1>
        <ToastContainer />
        <div>
          <form className="pet-form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="form-label" htmlFor="pet-nome">
                <legend>Nome:</legend>
                <input
                  className="form-input"
                  id="pet-nome"
                  placeholder="Ex.: Kate"
                  {...register(
                    'nome',
                    { required: true, pattern: /^[A-Z][a-zA-Z]*$/, minLength: 3 },
                  )}
                  aria-invalid={errors?.nome ? 'true' : 'false'}
                />
                <div>
                  {errors?.nome?.type === 'pattern' && <span role="alert">A primeira letra deve ser maiúscula</span>}
                  {errors?.nome?.type === 'required' && <span role="alert">O nome é obrigatório</span>}
                  {errors?.nome?.type === 'minLength' && <span role="alert">O nome deve ter ao menos 3 caracteres</span>}
                </div>
              </label>
            </div>
            <div>
              <label className="form-label" htmlFor="pet-idade">
                <legend>Idade:</legend>
                <input
                  className="form-input"
                  type="number"
                  id="pet-idade"
                  placeholder="Ex.: 2"
                  {...register('idade', { required: true, min: 0 })}
                  aria-invalid={errors?.idade ? 'true' : 'false'}
                />
                <div>
                  {errors?.idade?.type === 'required' && <span className="error-message">A idade é obrigatória</span>}
                  {errors?.idade?.type === 'min' && <span className="error-message">A idade mínima é 0</span>}
                </div>
              </label>
            </div>
            <div>
              <label className="form-label" htmlFor="pet-especie">
                <legend>Espécie: </legend>
                <select
                  id="pet-especie"
                  {...register('especie', { required: true })}
                >
                  <option value="cachorro">Cachorro</option>
                  <option value="gato">Gato</option>
                </select>
                {errors?.especie?.type === 'required' && <span className="error-message">A espécie é obrigatória</span>}
              </label>
            </div>
            <div>
              <label className="form-label" htmlFor="pet-tutor">
                <legend>Id do Tutor: </legend>
                <input
                  className="form-input"
                  type="number"
                  id="pet-tutor"
                  placeholder="Ex.: 1"
                  {...register('id_tutor', { required: true, min: 1 })}
                  aria-invalid={errors?.id_tutor ? 'true' : 'false'}
                />
                <div>
                  {errors?.id_tutor?.type === 'required' && <span className="error-message">O id do tutor é obrigatório</span>}
                  {errors?.id_tutor?.type === 'min' && <span className="error-message">O valor mínimo de id é 1</span>}
                </div>
              </label>
            </div>
            <div>
              <button type="submit">
                Cadastrar Pet
              </button>
            </div>
          </form>
        </div>
      </aside>
      <Table />
    </>
  );
}

export default Pets;
