import { useState } from "react";
import axios from "axios";
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
  Stack,

} from "@chakra-ui/react";
export const ModalComp = ({ data, setData, dataEdit,setDataEdit, isOpen, onClose, db, setDB, }) => {
  const [nomePet, setNamePet] = useState(dataEdit.nomePet || "");
  const [idadePet, setAge] = useState(dataEdit.idadePet || "");
  const [tipo, setCatDog] = useState(dataEdit.tipo || "");
  const [raca, setRace] = useState(dataEdit.raca || "");
  const [nomeDono, setNameOwner] = useState(dataEdit.nomeDono || "");
  const [telefone, setTel] = useState(dataEdit.telefone || "");
  const [id, setId] = useState(dataEdit.id);
  let disable;
  const handleSave = () => {
    if (!nomePet || !idadePet ||!tipo || !raca ||!nomeDono || !telefone) 
      return 
    
    if (Object.keys(dataEdit).lenght) {
      data[dataEdit.index] = { nomePet , idadePet , tipo , raca , nomeDono , telefone };
    }


    if (dataEdit.isCreating){// Create-RUD
      const newDataArray = [{ nomePet , idadePet , tipo , raca , nomeDono , telefone }]
      axios.post("http://localhost:3000/animal",newDataArray)
      .then((res)=>{
        db.push(res.data);
        setData(newDataArray);
      })
      .catch((err)=>{
        console.log(err.message);
      });
      
    } else{// C-Update-RUD

      const payload = { nomePet , idadePet , tipo , raca , nomeDono , telefone }
      axios.post(`http://localhost:3000/animais/${id}`, payload )
      .then((res)=>{
        db.map((data)=>{
          if (data.id == id){
            data.nomePet = nomePet;
            data.idadePet = idadePet;
            data.tipo = tipo;
            data.raca = raca;
            data.nomeDono = nomeDono;
            data.telefone = telefone;
          }
          
        })
        setDB(db);
        setData(payload);
      })
      .catch((err)=>{
        console.log(err);
      });
    }
    
    onClose();
  };

    
  return (  
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastro de Clientes</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" flexDir="column" gap={4} isRequired>
              <Box>
                <FormLabel>Nome do Pet</FormLabel>
                <Input
                  type="text"
                  value={nomePet}
                  onChange={(e) => setNamePet(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Idade do pet</FormLabel>
                <Input
                  type="number"
                  value={idadePet}
                  onChange={(e) => setAge(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Gato ou Cachorro?</FormLabel>
                <Stack spacing={4} direction='row'>
                  <Button id="0" size='lg' onClick={(e) => setCatDog("gato")}>
                    <img src="src/img/cat.png" alt="imagem de um gato" style={{width:40}} onClick={(e) => setCatDog("gato")}/>
                  </Button>

                  <Button id="1" size='lg' onClick={(e) => setCatDog("cachorro")}>
                    <img src="src/img/dog.png" alt="imagem de um cachorro" style={{width:40}}  onClick={(e) => setCatDog("cachorro")}/>
                    
                  </Button>
                </Stack>
               
              </Box>
              <Box>
                <FormLabel>Raça</FormLabel>
                <Input
                  type="text"
                  value={raca}
                  onChange={(e) => setRace(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Nome do Dono</FormLabel>
                <Input
                  type="text"
                  value={nomeDono}
                  onChange={(e) => setNameOwner(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Telefone</FormLabel>
                <Input
                  type="number"
                  value={telefone}
                  onChange={(e) => setTel(e.target.value)}
                />
              </Box>
              
            </FormControl>
          </ModalBody>
          <ModalFooter justifyContent="start">

            {
            (!nomePet || !idadePet ||!tipo || !raca ||!nomeDono || !telefone)
            ? disable=true
            : disable=false
            }

            <Button colorScheme="green" mr={3} onClick={handleSave} isDisabled={disable}>
              CADASTRAR
            </Button>
            <Button colorScheme="red" onClick={onClose} >
              CANCELAR
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
    
  );
  
};
