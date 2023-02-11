import { ReactPortal } from '../ReactPortal';
import { Overlay, Form, ContainerButton, CloseButton } from './styles';
import { Input } from '../Input';
import { ButtonForm } from '../ButtonForm';
import CloseIcon from '../../assets/images/Close Square Black.svg';
import { useState } from 'react';
import { api } from '../../utils/api';
import { Pet } from '../../types/pet';
import { Select } from '../Select';
import { Category } from '../../types/category';

interface ModalCreateCategoryProps {
  visible: boolean;
  onClose: () => void;
  petBeingEdit: Pet | null;
  category: Category[];
}

export function ModalEditPet({ visible, onClose, petBeingEdit, category }: ModalCreateCategoryProps) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [animalBreed, setAnimalBreed] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [instructorNumber, setInstructorNumber] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!visible) {
    return null;
  }

  async function handleConfirm() {

    if (!petBeingEdit) {
      return null;
    }

    setIsLoading(true);
    const payload = {
      name: name,
      age: age,
      animalType: animalType,
      animalBreed: animalBreed,
      instructorName: instructorName,
      instructorNumber: instructorNumber,
      category: categoryId,
    };

    await new Promise(resolve => setTimeout(resolve, 1000));
    await api.patch(`/pet/${petBeingEdit._id}`, payload);

    setIsLoading(false);
    setName('');
    setAge('');
    setAnimalType('');
    setAnimalBreed('');
    setInstructorName('');
    setInstructorNumber('');
    setCategoryId('');
    location.reload();
    onClose();
  }

  const isInputOk = name.length > 0;

  return (
    <ReactPortal containerId="modal-root">
      <Overlay>
        <Form>
          <CloseButton onClick={onClose}>
            <img src={CloseIcon} alt="CloseIcon" />
          </CloseButton>

          <small>Preencha todos os campos:</small>
          <Input
            value={name}
            placeholder='Nome'
            onChange={(event) => setName(event.target.value)}
          />

          <Input
            value={age}
            placeholder='Idade'
            onChange={(event) => setAge(event.target.value)}
          />

          <Input
            value={animalType}
            placeholder='Tipo do animal'
            onChange={(event) => setAnimalType(event.target.value)}
          />

          <Input
            value={animalBreed}
            placeholder='Raça do animal'
            onChange={(event) => setAnimalBreed(event.target.value)}
          />

          <Input
            value={instructorName}
            placeholder='Nome do instrutor'
            onChange={(event) => setInstructorName(event.target.value)}
          />

          <Input
            value={instructorNumber}
            placeholder='Numero do instrutor'
            onChange={(event) => setInstructorNumber(event.target.value)}
          />

          <Select
            value={categoryId}
            onChange={(event) => setCategoryId(event.target.value)}
          >
            <option value="">Escolha uma categoria</option>
            {category.map((category) => (
              <option value={category._id} key={category._id}>
                {category.name}
              </option>
            ))}
          </Select>

          <ContainerButton>
            <ButtonForm
              type='submit'
              disabled={!isInputOk}
              isLoading={isLoading}
              onClick={handleConfirm}
            >
            Editar pet
            </ButtonForm>
          </ContainerButton>
        </Form>
      </Overlay>
    </ReactPortal>
  );
}
