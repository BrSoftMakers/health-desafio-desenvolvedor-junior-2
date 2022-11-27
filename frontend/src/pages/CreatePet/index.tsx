// styled
import {
  CreatePetForm,
  CreatePetFormWrapper,
  CreatePetPageContainer,
  FormInput,
  InputLabel,
} from './styles';
// components
import FormErrrorMessage from '../../components/FormErrorMessage';
// React hook form
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createPetSchemaValidation } from '../../validations/createPetSchemaValidation';
// hooks
import { api } from '../../hooks/useApi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CreatePet = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createPetSchemaValidation) });

  const navigate = useNavigate();

  const submitForm = async (data: FieldValues) => {
    setIsLoading(true);
    try {
      const { name, age, breed, catOrDog, owner, ownerContact } = data;

      if (!name || !age || !breed || !catOrDog || !owner || !ownerContact) {
        return;
      }

      const newPet = { name, age, breed, catOrDog, owner, ownerContact };

      await api.post('/pets', newPet);

      navigate('/pets');

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <CreatePetPageContainer>
      <h2>Cadastre um Novo Pet!</h2>
      <CreatePetFormWrapper>
        <CreatePetForm onSubmit={handleSubmit(submitForm)}>
          <h3>Insira os dados do seu pet!</h3>

          <InputLabel htmlFor="name">Nome do pet:</InputLabel>
          <FormInput placeholder="Nome do pet..." {...register('name')} />

          {errors.name && <FormErrrorMessage message={errors.name?.message} />}

          <InputLabel>Idade do pet:</InputLabel>
          <FormInput placeholder="Idade do pet..." {...register('age')} />

          {errors.age && <FormErrrorMessage message={errors.age?.message} />}

          <InputLabel>Cachorro ou Gato:</InputLabel>
          <select {...register('catOrDog')}>
            <option value="Cachorro">Cachorro</option>
            <option value="Gato">Gato</option>
          </select>

          {errors.catOrDog && (
            <FormErrrorMessage message={errors.catOrDog?.message} />
          )}

          <InputLabel>Raça:</InputLabel>
          <FormInput placeholder="Raça do pet..." {...register('breed')} />

          {errors.breed && (
            <FormErrrorMessage message={errors.breed?.message} />
          )}

          <InputLabel>Nome do tutor:</InputLabel>
          <FormInput placeholder="Nome do tutor..." {...register('owner')} />

          {errors.owner && (
            <FormErrrorMessage message={errors.owner?.message} />
          )}

          <InputLabel>Contato do tutor:</InputLabel>
          <FormInput
            placeholder="Digite seu contato (apenas números)"
            type="number"
            {...register('ownerContact')}
          />

          {errors.ownerContact && (
            <FormErrrorMessage message={errors.ownerContact?.message} />
          )}

          {isLoading ? (
            <input type="submit" value="Carregando..." disabled />
          ) : (
            <input type="submit" value="Cadastrar" />
          )}
        </CreatePetForm>
      </CreatePetFormWrapper>
    </CreatePetPageContainer>
  );
};

export default CreatePet;
