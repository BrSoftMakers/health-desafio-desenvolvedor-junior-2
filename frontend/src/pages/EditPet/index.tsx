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
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Pet } from '../../types/Pet';

const EditPet = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [petBeingEdited, setPetBeingEdited] = useState<Pet>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({ resolver: yupResolver(createPetSchemaValidation) });

  const navigate = useNavigate();

  const { petId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getPetBeingEdited = async () => {
      try {
        const petBeingEdited = await api.get(`/pets/${petId}`);

        setPetBeingEdited(petBeingEdited.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getPetBeingEdited();
  }, []);

  const submitForm = async (data: FieldValues) => {
    setIsLoading(true);
    const { name, age, breed, catOrDog, owner, ownerContact } = data;

    if (!name || !age || !breed || !catOrDog || !owner || !ownerContact) {
      return;
    }

    try {
      const updatedPetData: Pet = {
        name,
        age,
        breed,
        catOrDog,
        owner,
        ownerContact,
      };

      await api.put(`/pets/${petId}`, updatedPetData);

      setIsLoading(false);

      navigate('/pets');
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  if (petBeingEdited && petBeingEdited) {
    setTimeout(() => {
      setFocus('name', {
        shouldSelect: false,
      });
    }, 40);

    setTimeout(() => {
      setFocus('age', {
        shouldSelect: false,
      });
    }, 35);

    setTimeout(() => {
      setFocus('catOrDog', {
        shouldSelect: false,
      });
    }, 30);

    setTimeout(() => {
      setFocus('breed', {
        shouldSelect: false,
      });
    }, 20);

    setTimeout(() => {
      setFocus('owner', {
        shouldSelect: false,
      });
    }, 15);

    setTimeout(() => {
      setFocus('ownerContact', {
        shouldSelect: false,
      });
    }, 10);
  }

  return (
    <CreatePetPageContainer>
      <h2>
        Editando o pet:{' '}
        {petBeingEdited ? petBeingEdited.name : 'Buscando dados...'}
      </h2>
      <CreatePetFormWrapper>
        <CreatePetForm onSubmit={handleSubmit(submitForm)}>
          <h3>Atualize os dados do seu pet!</h3>

          <InputLabel>Nome do pet:</InputLabel>
          <FormInput
            placeholder="Buscando dados..."
            {...register('name')}
            defaultValue={petBeingEdited && petBeingEdited?.name}
          />

          {errors.name && <FormErrrorMessage message={errors.name?.message} />}

          <InputLabel>Idade do pet:</InputLabel>
          <FormInput
            placeholder="Buscando dados..."
            {...register('age')}
            defaultValue={petBeingEdited && petBeingEdited?.age}
          />

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
          <FormInput
            placeholder="Buscando dados..."
            {...register('breed')}
            defaultValue={petBeingEdited && petBeingEdited?.breed}
          />

          {errors.breed && (
            <FormErrrorMessage message={errors.breed?.message} />
          )}

          <InputLabel>Nome do tutor:</InputLabel>
          <FormInput
            placeholder="Buscando dados..."
            {...register('owner')}
            defaultValue={petBeingEdited && petBeingEdited?.owner}
          />

          {errors.owner && (
            <FormErrrorMessage message={errors.owner?.message} />
          )}

          <InputLabel>Contato do tutor:</InputLabel>
          <FormInput
            placeholder="Buscando dados..."
            type="number"
            {...register('ownerContact')}
            defaultValue={petBeingEdited && petBeingEdited?.ownerContact}
          />

          {errors.ownerContact && (
            <FormErrrorMessage message={errors.ownerContact?.message} />
          )}

          {isLoading ? (
            <input type="submit" value="Carregando..." disabled />
          ) : (
            <input type="submit" value="Editar" />
          )}
        </CreatePetForm>
      </CreatePetFormWrapper>
    </CreatePetPageContainer>
  );
};

export default EditPet;
