import axios from 'axios';
import { PetModel } from 'models/Pet';
import { useEffect, useState } from 'react';
import { MdEdit, MdOutlineDeleteOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../../shared/ActionButton';
import './styles.css';
const HomeScreen = () => {
  const navigation = useNavigate();
  const [pets, setPets] = useState<PetModel[]>([]);
  useEffect(() => {
    (async () => {
      const data = await axios.get<PetModel[]>(
        'http://localhost:3000/api/pets'
      );
      setPets(data.data);
    })();
  }, []);

  const handleEdit = async (id: number) => {
    navigation(`edit/${id}`);
  };

  const handleDelete = async (id: number) => {
    const response = await axios.delete(
      `http://localhost:3000/api/pets/remove/${id}`
    );
    if (response.status == 201) {
      const data = await axios.get<PetModel[]>(
        'http://localhost:3000/api/pets'
      );
      setPets(data.data);
    }
  };

  return (
    <>
      <div className='button-ctn'>
        <ActionButton
          buttonTitle='Adicionar Pet'
          buttonAction={() => navigation('/create')}
        />
      </div>
      <div className='table-ctn'>
        <table className='table'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Raça</th>
              <th>Tipo</th>
              <th>Telefone do Dono</th>
              <th>Nome do Dono</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => (
              <tr>
                <td>{pet.name}</td>
                <td>{pet.age}</td>
                <td>{pet.race}</td>
                <td>{pet.animalType}</td>
                <td>{pet.ownerName}</td>
                <td>{pet.ownerPhone}</td>
                <td>
                  <div id='action'>
                    <MdEdit
                      className='button-action'
                      size={22}
                      onClick={() => handleEdit(pet.id)}
                    />
                    <MdOutlineDeleteOutline
                      className='button-action'
                      size={22}
                      onClick={() => handleDelete(pet.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomeScreen;
