/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { registerPet } from '../../routes/utils/pet.routes';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

function Pets() {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const toastMessage = (message, type) => {
    toast?.[type](message, {
      position: toast.POSITION.TOP_RIGHT,
      closeButton: true,
      autoClose: 3000,
      pauseOnHover: false,
      theme: 'colored',
    });
  };

  const onSubmit = async (data) => {
    try {
      await registerPet(data);
      toastMessage('Cadastro efetuado com sucesso!', 'success');
    } catch (error) {
      toastMessage('Ops! Algo de errado não está certo!', 'error');
    }
  };

  return (
    <section className="pet-form-container">
      <h1>Cadastro de Pet</h1>
      <ToastContainer />
      <form className="pet-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <fieldset htmlFor="pet-nome">
            <legend>Nome: </legend>
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
          </fieldset>
        </div>
        <div>
          <fieldset htmlFor="pet-idade">
            <legend>Idade: </legend>
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
          </fieldset>
        </div>
        <div>
          <fieldset htmlFor="pet-especie">
            <legend>Espécie: </legend>
            <select
              id="pet-especie"
              {...register('especie', { required: true })}
            >
              <option value="cachorro">Cachorro</option>
              <option value="gato">Gato</option>
            </select>
            {errors?.especie?.type === 'required' && <span className="error-message">A espécie é obrigatória</span>}
          </fieldset>
        </div>
        <div>
          <fieldset htmlFor="pet-tutor">
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
          </fieldset>
        </div>
        <div>
          <button type="submit">
            Cadastrar Pet
          </button>
        </div>
      </form>
    </section>
  );
}

export default Pets;
