/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import { registerPet } from '../routes/utils/pet.routes';

function Pets() {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const request = await registerPet(data);
      console.log(request);
    } catch (error) {
      console.log('erro');
    }
  };

  return (
    <>
      <h1>Tela de Cadastro - PetMania</h1>
      <section className="pet-form-container">
        <form className="pet-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="pet-nome">
            <span>Nome: </span>
            <input
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
          <label htmlFor="pet-idade">
            <span>Idade: </span>
            <input
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
          <label htmlFor="pet-especie">
            <span>Espécie: </span>
            <select
              id="pet-especie"
              {...register('especie', { required: true })}
            >
              <option value="cahorro">Cachorro</option>
              <option value="gato">Gato</option>
            </select>
            {errors?.especie?.type === 'required' && <span className="error-message">A espécie é obrigatória</span>}
          </label>
          <label htmlFor="pet-tutor">
            <span>Id do Tutor: </span>
            <input
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
          <button type="submit">
            Cadastrar Pet
          </button>
        </form>
      </section>

    </>
  );
}

export default Pets;
