import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DashboardContext, iPet } from '../../contexts/DashboarContext';
import { newPet } from '../../validations/modal';
import { BsTrash } from 'react-icons/bs';

export interface iListProps {
  list: iPet[];
}

const OptionsPet = ({ list }: iListProps) => {
  const { addPet, removePet } = useContext(DashboardContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iPet>({
    resolver: yupResolver(newPet),
  });
  console.log(list);

  return (
    <>
      <form onSubmit={handleSubmit(addPet)}>
        <div className='addTech-form'>
          <label htmlFor='name'>Nome</label>
          <input type='text' {...register('name')} />
          <p>{errors.name?.message}</p>

          <label htmlFor='age'>Idade</label>
          <input type='number' {...register('age')} />
          <p>{errors.age?.message}</p>

          <label htmlFor='type'>Tipo</label>
          <input type='text' {...register('type')} />
          <p>{errors.type?.message}</p>

          <label htmlFor='breed'>Raça</label>
          <input type='text' {...register('breed')} />
          <p>{errors.breed?.message}</p>
          <div>
            <span>Informações do dono</span>
            <div>
              <label htmlFor='owner_name'>Nome</label>
              <input type='text' {...register('owner_id.name')} />
              <p>{errors.owner_id?.message}</p>
            </div>
            <div>
              <label htmlFor='phone_number'>Celular</label>
              <input type='tel' {...register('owner_id.phone_number')} />
              <p>{errors.owner_id?.message}</p>
            </div>
          </div>

          <button type='submit'>Cadastrar Pet</button>
        </div>
      </form>
      <ul>
        {list.length === 0 && (
          <li>
            <h2>Nenhum pet encontrado</h2>
          </li>
        )}
        {list.map((pet, index) => (
          <li key={index}>
            <p>{pet.name}</p>
            <div onClick={() => removePet(pet.id)}>
              <BsTrash id='remove' />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default OptionsPet;
