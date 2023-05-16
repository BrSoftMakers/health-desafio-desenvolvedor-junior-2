import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';
import { Select, MenuItem } from '@mui/material';
import { Button, Modal, Typography } from '@mui/material';
import { registerPet } from '../../Api/Api';

const CustomButton = styled(Button)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 30px;
  border-radius: 7px;
  box-shadow: 0px 6px 14px rgba(70, 67, 67, 0.41);
`;

const CenteredContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh; /* Define a altura total da tela */
`;

const ModalContent = styled(Box)`
  background-color: ghostwhite;;
  padding: 24px;
  border: px solid black;
  border-radius: 2px;
  box-shadow: 0px 15px 28px rgba(0, 0, 0, 0.35);
`;

const ButtonContainer = styled('div')`
  display: grid;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-right: auto;
`;

function PetForm({ pets, setPets, onClose, isOpen }) {
  const [newPetData, setNewPetData] = useState({
    nome: '',
    idade: '',
    especie: 'Cachorro', // Valor padrão para Cachorro
    raca: '',
    dono: '',
    contato: ''
  });

  const [isAddingPet, setIsAddingPet] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const handleAddPet = async (event) => {
    event.preventDefault();
    try {
      setIsAddingPet(true);
      const newPet = { ...newPetData };
      await registerPet(newPet);
      setPets((prevPets) => [newPet, ...prevPets]); 
      setNewPetData({
        nome: '',
        idade: '',
        especie: 'Cachorro',
        raca: '',
        dono: '',
        contato: ''
      });
      setIsAddingPet(false);
      setIsModalOpen(false);
    } catch (error) {
      setIsAddingPet(false);
    }
  };


  const handleChange = (event) => {
    setNewPetData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <ButtonContainer>
        <Button
          variant="contained"
          className="customButton"
          onClick={handleOpenModal}>Adicionar Pet</Button>
      </ButtonContainer>
      <Modal style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <CenteredContainer>
          <ModalContent style={{ backgroundColor: '#f2f2f2', padding: '20px' }}>
            <form onSubmit={handleAddPet} style={{ display: 'flex', flexDirection: 'column', width: ' 175px' }}>
              <Typography variant="h6"
                style={{ textAlign: 'center' }}>Adicionar Pet
              </Typography>
              <label>
                Nome:
                <input type="text"
                  name="nome"
                  value={newPetData.nome}
                  onChange={handleChange}
                  style={{ marginBottom: '10px' }} />
              </label>
              <label>
                Idade:
                <input type="text"
                  name="idade"
                  value={newPetData.idade}
                  onChange={handleChange}
                  style={{ marginBottom: '10px' }} />
              </label>
              <label>
                Espécie:
                <Select
                  name="especie"
                  value={newPetData.especie}
                  onChange={handleChange}
                  style={{ marginBottom: '10px' }}
                >
                  <MenuItem value="Cachorro">Cachorro</MenuItem>
                  <MenuItem value="Gato">Gato</MenuItem>
                </Select>
              </label>
              <label>
                Raça:
                <input type="text"
                  name="raca"
                  value={newPetData.raca}
                  onChange={handleChange}
                  style={{ marginBottom: '10px' }} />
              </label>
              <label>
                Dono:
                <input type="text"
                  name="dono"
                  value={newPetData.dono}
                  onChange={handleChange}
                  style={{ marginBottom: '10px' }} />
              </label>
              <label>
                Contato:
                <input type="text"
                  name="contato"
                  value={newPetData.contato}
                  onChange={handleChange}
                  style={{ marginBottom: '10px' }} />
              </label>
              <CustomButton variant="contained"
                startIcon={<AddIcon />}
                type="submit">
                {isAddingPet ? (
                  <React.Fragment>
                    <AddIcon /> Adicionando...
                  </React.Fragment>
                ) : (
                  <React.Fragment>Adicionar Pet</React.Fragment>
                )}
              </CustomButton>
            </form>
          </ModalContent>
        </CenteredContainer>
      </Modal>
      {isDetailsModalOpen && (
        <Modal
          open={isDetailsModalOpen}
          onClose={() => setIsDetailsModalOpen(false)}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
        </Modal>
      )}
    </>
  );
}

export default PetForm;
