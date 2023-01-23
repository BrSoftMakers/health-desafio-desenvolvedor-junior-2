import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DashboardContext, iPet } from '../../contexts/DashboarContext';
import { newPet } from '../../validations/schema';
import { BsPencil, BsTrash } from 'react-icons/bs';
import { Form, Button, Input } from '../Form/style';
import { ContainerPets } from './style';
import useModal from '../ModaL/Hooks/ModalHooks';
import Modal from '../ModaL';

export interface iListProps {
  list: iPet[];
}

const OptionsPet = ({ list }: iListProps) => {
  const { addPet, removePet } = useContext(DashboardContext);
  const { isOpen, toggle } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iPet>({
    resolver: yupResolver(newPet),
  });
  console.log(list);

  return (
    <>
      <Form onSubmit={handleSubmit(addPet)}>
        <h2>Cadastramento do pet</h2>
        <div className='addPet-form'>
          <Input>
            <label htmlFor='name'>Nome</label>
            <input type='text' {...register('name')} />
            <p>{errors.name?.message}</p>
          </Input>
          <Input>
            <label htmlFor='age'>Idade</label>
            <input type='number' {...register('age')} />
            <p>{errors.age?.message}</p>
          </Input>
          <Input>
            <label htmlFor='type'>Tipo</label>
            <input type='text' {...register('type')} />
            <p>{errors.type?.message}</p>
          </Input>
          <Input>
            <label htmlFor='breed'>Raça</label>
            <input type='text' {...register('breed')} />
            <p>{errors.breed?.message}</p>
          </Input>

          <span>Informações do dono</span>
          <Input>
            <label htmlFor='owner_name'>Nome</label>
            <input type='text' {...register('owner_id.name')} />
            <p>{errors.owner_id?.message}</p>
          </Input>
          <Input>
            <label htmlFor='phone_number'>Celular</label>
            <input type='tel' {...register('owner_id.phone_number')} />
            <p>{errors.owner_id?.message}</p>
          </Input>

          <Button
            type='submit'
            onClick={() => {
              reset();
            }}
          >
            Cadastrar Pet
          </Button>
        </div>
      </Form>
      <ContainerPets>
        {list.length === 0 && <h2>Nenhum pet encontrado</h2>}
        <ul>
          {list.map((pet, index) => (
            <li key={index}>
              <h2>{pet.name}</h2>
              <span>{pet.age}</span>
              <span>{pet.type}</span>
              <span>{pet.breed}</span>
              <div className='options'>
                <div onClick={() => removePet(pet.id)}>
                  <BsTrash id='remove' />
                </div>
                <div onClick={toggle}>
                  <BsPencil />
                </div>
                <Modal isOpen={isOpen} toggle={toggle}>
                  <div>Yaay!!! Our Modal is rendered Properly.</div>
                </Modal>
              </div>
            </li>
          ))}
        </ul>
      </ContainerPets>
    </>
  );
};

export default OptionsPet;
