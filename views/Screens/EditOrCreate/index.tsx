import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { PetModel } from 'models/Pet';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Pet from '../../models/Pet';
import ActionButton from '../../shared/ActionButton';
import petValidation from '../../validations/petValidation';
import './style.css';

const EditOrCreate = () => {
  const [initialValues, setInitialValues] = useState<Pet>({
    name: '',
    animalType: 'cachorro',
    age: 0,
    race: '',
    ownerName: '',
    ownerPhone: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      var response = await axios.get<PetModel>(
        `http://localhost:3000/api/pets/${id}`
      );
      var pet = response.data;
      const initial: Pet = {
        name: pet.name,
        race: pet.race,
        animalType: pet.animalType,
        age: pet.age,
        ownerName: pet.ownerName,
        ownerPhone: pet.ownerPhone,
      };
      setInitialValues(initial);
      console.log(initialValues);
      console.log(initial);
    };
    if (id != null) {
      fetchData();
    }
  }, []);

  const handleSubmit = async (value: Pet) => {
    if (id != null) {
      var response = await axios.put(
        `http://localhost:3000/api/pets/edit/${id}`,
        value
      );
      if (response.status == 200) {
        navigate('/');
      }
    } else {
      var response = await axios.post('http://localhost:3000/api/pets', value);
      if (response.status == 200) {
        navigate('/');
      }
    }
  };

  return (
    <div className='edit-or-create-ctn'>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={petValidation}
        onSubmit={handleSubmit}
      >
        <Form className='edit-or-create-form'>
          <div className='input-ctn'>
            <label htmlFor='name'>Nome</label>
            <Field name='name' id='edit-or-create-input' placeholder='Nome' />
            <ErrorMessage
              className='error-message'
              name='name'
              component={'p'}
            />
          </div>
          <div id='input-select' className='input-ctn'>
            <label htmlFor='animalType'>Tipo do animal</label>
            <Field as='select' name='animalType' defaultValue={'gato'}>
              <option value='cachorro'>Cachorro</option>
              <option value='gato'>Gato</option>
            </Field>
            <ErrorMessage
              className='error-message'
              name='animalType'
              component={'p'}
            />
          </div>
          <div className='input-ctn'>
            <label htmlFor='race'>Raça</label>
            <Field name='race' id='edit-or-create-input' placeholder='Raça' />
            <ErrorMessage
              className='error-message'
              name='race'
              component={'p'}
            />
          </div>
          <div className='input-ctn'>
            <label htmlFor='age'>Idade</label>
            <Field
              type='number'
              name='age'
              min='0'
              id='edit-or-create-input'
              placeholder='Idade'
            />
            <ErrorMessage
              className='error-message'
              name='age'
              component={'p'}
            />
          </div>
          <div className='input-ctn'>
            <label htmlFor='ownerName'>Nome do dono</label>
            <Field
              name='ownerName'
              id='edit-or-create-input'
              placeholder='Nome do dono'
            />
            <ErrorMessage
              className='error-message'
              name='ownerName'
              component={'p'}
            />
          </div>
          <div className='input-ctn'>
            <label htmlFor='ownerPhone'>Telefone do Dono</label>
            <Field
              name='ownerPhone'
              id='edit-or-create-input'
              placeholder='Telefone do dono'
            />
            <ErrorMessage
              className='error-message'
              name='ownerPhone'
              component={'p'}
            />
          </div>

          <ActionButton
            buttonTitle={id != null ? 'Editar' : 'Criar'}
            isSubmit
          />
        </Form>
      </Formik>
    </div>
  );
};

export default EditOrCreate;
