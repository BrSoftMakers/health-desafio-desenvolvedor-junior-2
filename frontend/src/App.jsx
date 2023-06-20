import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import './components/FormCadastro.jsx'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button, 
  IconButton, 
  HStack,
  Flex
} from '@chakra-ui/react';

import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import CadastroModal from './components/FormCadastro.jsx';

function App() {
  
  const [animals, setAnimals] = useState([{}])

  useEffect(() => {
    axios.get("http://localhost:3333")
    .then((response) => {
      setAnimals(response.data);
    })
    .catch((error) => {
      console.log("Deu errado", error);
    })
  }, [])

  function formatPhoneNumber(phoneNumber) {
    if (typeof phoneNumber === 'string' && phoneNumber.length === 11) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7)}`;
    }
    return phoneNumber;
  }

  const handleDeleteAnimal = (id) => {
    axios.delete(`http://localhost:3333/${id}`)
    .then(() => {
      // Se a exclusão for bem-sucedida
      axios
        .get('http://localhost:3333/')
        .then((response) => {
          setAnimals(response.data);
        })
        .catch((error) => {
          console.log("Erro ao buscar lista de animais", error);
        });
    })
    .catch((error) => {
      console.log("Erro ao excluir Pet", error);
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedAnimal(null);
    setIsModalOpen(false);
  };

  const handleAddAnimal = (newAnimal) => {
    // Adicionar o novo animal à lista de animais
    setAnimals((prevAnimals) => [...prevAnimals, newAnimal]);
  };

  const [selectedAnimal, setSelectedAnimal] = useState(null);
  
  const handleEditAnimal = (id) => {
    const animalSelecionado = animals.find((animal) => animal.id === id);
    setSelectedAnimal(animalSelecionado);
    setIsModalOpen(true);
  };

  const handleUpdateAnimal = (updatedAnimal) => {
    axios.get('http://localhost:3333')
    .then((response) => {
      setAnimals(response.data);
    })
    .catch((error) => {
      console.log("Erro ao buscar lista de animais", error);
    });
  };

  return (
    <>
      <Flex justifyContent="flex-end" marginTop="2" marginBottom="4">
        <Button colorScheme="teal" onClick={handleOpenModal}>
          Novo Pet
        </Button>
      </Flex>
      <TableContainer>
        <Table variant='striped' colorScheme='teal'>
          <TableCaption>Lista de Animais no petshop</TableCaption>
          <Thead>
            <Tr backgroundColor="teal.500">
              <Th color="white">Nome</Th>
              <Th isNumeric color="white">Idade</Th>
              <Th color="white">Tipo</Th>
              <Th color="white">Raça</Th>
              <Th color="white">Nome do Dono</Th>
              <Th color="white">Telefone do Dono</Th>
              <Th color="white">Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {animals.map(( animal, key ) => {
              return (
                <Tr key={ key } >
                  <Td>{ animal.nome }</Td>
                  <Td isNumeric>{ animal.idade }</Td>
                  <Td>{ animal.tipo }</Td>
                  <Td>{ animal.raca }</Td>
                  <Td>{ animal.nome_dono }</Td>
                  <Td>{formatPhoneNumber(animal.telefone_dono)}</Td>
                  <Td>
                    <HStack spacing={2}>
                      <IconButton
                        icon={<EditIcon />}
                        aria-label="Editar"
                        variant="ghost"
                        onClick={() => handleEditAnimal(animal.id)}
                      />
                      <IconButton
                        icon={<DeleteIcon />}
                        aria-label="Excluir"
                        variant="ghost"
                        onClick={() => handleDeleteAnimal(animal.id)}
                      />
                    </HStack>
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
          <Tfoot>
           <Tr backgroundColor="teal.500">
              <Th color="white">Nome</Th>
              <Th isNumeric color="white">Idade</Th>
              <Th color="white">Tipo</Th>
              <Th color="white">Raça</Th>
              <Th color="white">Nome do Dono</Th>
              <Th color="white">Telefone do Dono</Th>
              <Th color="white">Ações</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      
       

      {/* Modal de cadastro */}
      <CadastroModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleAddAnimal} 
      animal={selectedAnimal} onUpdate={handleUpdateAnimal}/>



    </>
  )
}

export default App;
