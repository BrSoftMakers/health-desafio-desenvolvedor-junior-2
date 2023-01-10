import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box,
  } from "@chakra-ui/react";
import axios from "axios";
  import { useState } from "react";
  
  const ModalComp = ({ getPets, data, setData, dataEdit, isOpen, onClose }) => {
    const [name, setName] = useState(dataEdit.name || "")
    const [age, setAge] = useState(dataEdit.age || "")
    const [animal, setAnimal] = useState(dataEdit.animal || "")
    const [race, setRace] = useState(dataEdit.race || "");
    const [ownerName, setOwnerName] = useState(dataEdit.ownerName || "");
    const [tel, setTel] = useState(dataEdit.tel || "");
  
    const handleSave =  async () => {
      if(name=== ""){
        return alert("Por favor insira o Nome");
      }

      if(animal === ""){
        return alert("Por favor insira o Animal");
      }

      if(ownerName === ""){
        return alert("Por favor insira o Nome do dono");
      }

      if(tel === ""){
        return alert("Por favor insira o telefone");
      }
     
      const response = await axios.post("http://localhost:3333/pets", {
        name:name,
        age:age,
        animal:animal,
        race:race,
        ownerName:ownerName,
        tel:tel
      })
  

      getPets()
      onClose();
    }

    const handleEdit = async() =>{
      const response = await axios.put ('http://localhost:3333/pets', {
        Id:dataEdit.Id,
        name:name,
        age:age,
        animal:animal,
        race:race,
        ownerName:ownerName,
        tel:tel
      })
      getPets()
    }
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cadastro de Animais</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl display="flex" flexDir="column" gap={4}>
                <Box>
                  <FormLabel>Nome</FormLabel>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Idade</FormLabel>
                  <Input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Espécie</FormLabel>
                  <Input
                    type="text"
                    value={animal}
                    onChange={(e) => setAnimal(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Raça</FormLabel>
                  <Input
                    type="text"
                    value={race}
                    onChange={(e) => setRace(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Nome do dono</FormLabel>
                  <Input
                    type="text"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Telefone</FormLabel>
                  <Input
                    type="number"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                  />
                </Box>             
              </FormControl>
            </ModalBody>
  
            <ModalFooter justifyContent="start">
              <Button colorScheme="green" mr={3}onClick={!Object.keys(dataEdit).length ? handleSave : handleEdit}>
                SALVAR
              </Button>
              <Button colorScheme="red" onClick={onClose}>
                CANCELAR
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default ModalComp;
  