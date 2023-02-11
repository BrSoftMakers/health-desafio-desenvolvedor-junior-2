import { useState, useEffect, useMemo } from 'react';
import { api } from '../../utils/api';
import { Category } from '../../types/category';
import { ButtonCreateCategory } from '../ButtonCreateCategory';
import { Pet } from '../../types/pet';
import EditIcon from '../../assets/images/Edit Square.svg';
import DeleteIcon from '../../assets/images/Close Square.svg';
import AddIcon from '../../assets/images/Add User.svg';
import { Container, ContentInfo, ButtonCategory, ContainerCard, ContentInfoCard, Card, InfoCard, EditCard, DeleteCard, InputSearchContainer, Small } from './styles';
import { ButtonCreateCard } from '../ButtonCreateCard';
import { ModalCreateCategory } from '../ModalCreateCategory';
import socketIo from 'socket.io-client';
import { ModalDelete } from '../ModalDelete';
import { ModalEditPet } from '../ModalEditPet';
import { ModalCreatePet } from '../ModalCreatePet';

export function Content() {

  const [category, setCategory ] = useState<Category[]>([]);
  const [pet, setPet] = useState<Pet[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modalCreateCategory, setModalCreateCategory] = useState(false);
  const [modalCreatePet, setModalCreatePet] = useState(false);
  const [modalEditPet, setModalEditPet] = useState(false);
  const [modalDeleteCategory, setModalDeleteCategory] = useState(false);
  const [modalDeletePet, setModalDeletePet] = useState(false);
  const [categoryBeingDeleted, setCategoryBeingDeleted] = useState<Category | null>(null);
  const [petBeingDeleted, setPetBeingDeleted] = useState<Pet | null>(null);
  const [petBeingEdit, setPetBeingEdit] = useState<Pet | null>(null);

  const filteredPets = useMemo(() => pet.filter((pet) => (
    pet.instructorName.toLowerCase().startsWith(searchTerm.toLowerCase())
  )), [pet, searchTerm]);

  useEffect(() => {
    const socket = socketIo('http://localhost:3001', {
      transports: ['websocket'],
    });

    socket.on('category@new', (category) => {
      setCategory((prevState) => prevState.concat(category));
    });

    return () => {
      socket.removeListener('category@new');
    };
  });

  useEffect(() => {
    Promise.all([
      api.get('/category'),
      api.get('/pet'),
    ]).then(([categoryResponse, petResponse]) => {
      setCategory(categoryResponse.data);
      setPet(petResponse.data);
    });
  }, []);

  async function handleSelectCategory(categoryId: string) {
    const route = !categoryId ? '/pet' : `/category/${categoryId}/pet`;

    await new Promise(resolve => setTimeout(resolve, 1000));
    const petCategory = await api.get(route);

    setPet(petCategory.data);
  }

  async function handleSelectAllCategory() {

    await new Promise(resolve => setTimeout(resolve, 1000));
    const petCategory = await api.get('/pet');

    setPet(petCategory.data);
  }

  function handleOpenModalCreateCategory() {
    setModalCreateCategory(true);
  }

  function handleCloseModalCreateCategory() {
    setModalCreateCategory(false);
  }

  function handleOpenModalCreatePet() {
    setModalCreatePet(true);
  }

  function handleCloseModalCreatePet() {
    setModalCreatePet(false);
  }

  function handleOpenModalEditPet(pet: Pet) {
    setModalEditPet(true);
    setPetBeingEdit(pet);
  }

  function handleCloseModalEditPet() {
    setModalEditPet(false);
    setPetBeingEdit(null);
  }

  function handleOpenModalDeleteCategory(category: Category) {
    setModalDeleteCategory(true);
    setCategoryBeingDeleted(category);
  }

  function handleCloseModalDeleteCategory() {
    setModalDeleteCategory(false);
    setCategoryBeingDeleted(null);
  }

  function handleOpenModalDeletePet(pet: Pet) {
    setModalDeletePet(true);
    setPetBeingDeleted(pet);
  }

  function handleCloseModalDeletePet() {
    setModalDeletePet(false);
    setPetBeingDeleted(null);
  }

  async function handleConfirmDeleteCategory() {

    if(!categoryBeingDeleted) {
      return null;
    }

    try {
      setIsLoading(true);

      await new Promise(resolve => setTimeout(resolve, 1000));
      await api.delete(`/category/${categoryBeingDeleted._id}`);

      setCategory((prevState) => prevState.filter((category) => category._id !== categoryBeingDeleted._id));

      handleCloseModalDeleteCategory();
    } catch {} finally {
      setIsLoading(false);
    }
  }

  async function handleConfirmDeletePet() {

    if(!petBeingDeleted) {
      return null;
    }

    try {
      setIsLoading(true);

      await new Promise(resolve => setTimeout(resolve, 1000));
      await api.delete(`/pet/${petBeingDeleted._id}`);

      setPet((prevState) => prevState.filter((pet) => pet._id !== petBeingDeleted._id));

      handleCloseModalDeletePet();
    } catch {} finally {
      setIsLoading(false);
    }
  }



  return (
    <>
      <Container>
        <ContentInfo>
          <InputSearchContainer>
            <input
              value={searchTerm}
              type="text"
              placeholder='Pesquise pelo instrutor'
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </InputSearchContainer>

          <ButtonCreateCategory onClick={handleOpenModalCreateCategory}>
            Criar uma nova categoria
          </ButtonCreateCategory>

          <ButtonCreateCategory onClick={handleSelectAllCategory}>
            Mostrar todos
          </ButtonCreateCategory>

          {category.map((categories) => (
            <ButtonCategory
              onClick={() => handleSelectCategory(categories._id)}
              key={categories._id}
            >
              {categories.name}
              <button type='button' onClick={() =>              handleOpenModalDeleteCategory(categories)}>
                <img src={DeleteIcon} alt="DeleteIcon" />
              </button>
            </ButtonCategory>
          ))}
        </ContentInfo>
      </Container>

      <ContainerCard>
        <ContentInfoCard>
          <ButtonCreateCard onClick={handleOpenModalCreatePet}>
            <img src={AddIcon} alt="AddIcon" />
          </ButtonCreateCard>


          {pet.length > 0 ? (
            <>
              {filteredPets.map((cardInfo) => (
                <Card key={cardInfo._id}>
                  <img src={`http://localhost:3001/uploads/${cardInfo.imagePath}`} alt="image" />

                  <InfoCard>
                    <small>Nome: {cardInfo.name}</small>
                    <small>Idade: {cardInfo.age}</small>
                    <small>Tipo: {cardInfo.animalType}</small>
                    <small>Raça: {cardInfo.animalBreed}</small>
                    <small>Instrutor: {cardInfo.instructorName}</small>
                    <small>Telefone: {cardInfo.instructorNumber}</small>

                    <EditCard onClick={() => handleOpenModalEditPet(cardInfo)}>
                      <img src={EditIcon} alt="EditIcon" />
                    </EditCard>
                    <DeleteCard onClick={() => handleOpenModalDeletePet(cardInfo)}>
                      <img src={DeleteIcon} alt="DeleteIcon" />
                    </DeleteCard>
                  </InfoCard>
                </Card>
              ))}
            </>
          ) : (
            <Small>Não temos nenhum animal cadastrado nesta categoria! 😔</Small>
          )}
        </ContentInfoCard>
      </ContainerCard>

      <ModalCreateCategory
        visible={modalCreateCategory}
        onClose={handleCloseModalCreateCategory}
      />

      <ModalDelete
        visible={modalDeleteCategory}
        isLoading={isLoading}
        onClose={handleCloseModalDeleteCategory}
        onConfirm={handleConfirmDeleteCategory}
        buttonDescription='Deletar categoria'
      />

      <ModalDelete
        visible={modalDeletePet}
        isLoading={isLoading}
        onClose={handleCloseModalDeletePet}
        onConfirm={handleConfirmDeletePet}
        buttonDescription='Deletar pet'
      />

      <ModalEditPet
        category={category}
        visible={modalEditPet}
        onClose={handleCloseModalEditPet}
        petBeingEdit={petBeingEdit}
      />

      <ModalCreatePet
        category={category}
        visible={modalCreatePet}
        onClose={handleCloseModalCreatePet}
      />
    </>
  );
}
