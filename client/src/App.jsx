import { EditIcon, DeleteIcon } from "@chakra-ui/icons";  //Componentes de interface
import axios from 'axios'; //Cliente HTTP baseado-em-promessas para Requisições
import {Spacer,Box,Flex,Button,useDisclosure,Table,Thead,Tr,Th,Tbody,Td,useBreakpointValue,Tooltip,Circle, useBoolean, Alert,  AlertIcon,  AlertTitle,  AlertDescription,Stack} from "@chakra-ui/react"; //Componentes de interface
import { useEffect, useState } from "react";
import { ModalComp } from "./components/ModalComp";
import "./App.css";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); //Controlar Modal
  const [data, setData] = useState([]); //Controlar renderização na tela
  const [db, setDB] = useState([]); //Controlar dados vindo do banco de dados
  const [dataEdit, setDataEdit] = useState({});//Controlar dados enviados para o Modal
  let isCreating = false; //Informar ao modal se é um create ou update
  
  useEffect(() => {
    // Armazenar os dados vindos do banco de dados
    axios.get("http://localhost:3000/animais")
    .then((res)=>{
      const db = res.data ? res.data : [];
      setDB(db);
      
    })

  }, []);
  
  const handleCreate = (data) => {//Função de criação chamada para setar a variável isCreating
    isCreating=true; 
    setDataEdit({isCreating}); //Adicionando variavel que o modal verifica se é create
    onOpen(); //Chamada para abrir o Modal
  }
  const handleRemove = (id) => {//Função para Deletar chamada para setar a variável isCreating
    axios.delete(`http://localhost:3000/animais/${id}`)
    .then((res)=>{
      const db = res.data ? (res.data) : [];
      setDB(db);
    })
  };
  
  return (
    
    <div id="page" className="bodyPage">
      <Flex className="FlexBox1" h="100vh"  gap="10">
        <Flex className="BoxLeft" maxW={250} gap="2" align="center" flexDirection="column" w="100%" h="100vh" >
          <h2>PetLove</h2>
          <img className="logo" src="./src/img/logo.png" alt=""/>
          <Spacer />
          <Box mt="10">
          {db.length>1  // Verifica se existe mais de 1 linha no db
          ?<p>Existem {db.length} Pets</p> //se sim mostra na tela que existe 1
          :db.length==1 //senão for maior que 1, verifica se é tamanho 1
          ?<p>Existe {db.length} Pet</p> //se sim, mostra que existe 1
          :<p>Nenhum Pet</p>//senão, mostra nenhum Pet
          }
          
          </Box>
          <img src="./src/img/sm.png" alt="" width="90px"/>
        </Flex>

        <Box maxW={1000} width="80%" h="98vh" py={10} px={2}>
          <Flex align="center" justify="space-between" fontSize="30px" fontFamily="mono">
            <h1>Pets Cadastrados no PetShop</h1>
              <Tooltip label='Cadastrar um novo Pet' placement='left'>
              <Button colorScheme="blue"bg="#07ad5b" onClick={() => [handleCreate()]}>
              NOVO CADASTRO
              </Button>
            </Tooltip>
          </Flex>
          <Box overflowY="auto" height="100%" fontSize="18px">
          {db.length > 0 ? //Se Possuir dados no banco será renderizado uma tabela contendo o conteudo do db
            <Table mt="10"  > 
              <Thead>
                <Tr>
                    <Th  fontSize="12px">
                      Nome do Pet 
                    </Th>
                    <Th  fontSize="12px">
                      Idade
                    </Th>
                    <Th  fontSize="12px">
                      Gato ou Cachorro
                    </Th>
                    <Th  fontSize="12px">
                      Raça
                    </Th>
                    <Th  fontSize="12px">
                      Nome do Dono
                    </Th>
                    <Th  fontSize="12px">
                      Telefone
                    </Th>
                    <Th p={0}></Th>
                    <Th p={0}></Th>
                  </Tr>
                  </Thead>
              
              <Tbody >
                {db.map(({ id, nomePet, idadePet , tipo, raca, nomeDono, telefone}, index) => (
                 //Esta mapeando todo conteudo do db para renderizar na tabela
                <Tr key={index}  cursor="pointer" style={{backgroundColor:"white"}} >
                    {/* _hover={{ bg: "gray.100" }} */}
                    <Td >{nomePet}</Td>
                    <Td >{idadePet}</Td>
                    <Td >{tipo}</Td>
                    <Td >{raca}</Td>
                    <Td >{nomeDono}</Td>
                    <Td >{telefone}</Td>
                    <Td p={0}>
                      <Tooltip label='Editar Informações' placement='left'>
                        <Circle 
                          size='40px' 
                          bg='#3182ce' 
                          color='white' 
                          onClick={() => [
                              isCreating = false,
                              setDataEdit({ id, nomePet, idadePet, tipo, raca, nomeDono, telefone, index, isCreating }),
                              onOpen(),
                          ]}>
                            <EditIcon fontSize={15}/>
                        </Circle>
                      </Tooltip>
                    </Td>
                    <Td p={0}>
                      <Tooltip label='Excluir Pet' placement='left'>
                        <Circle size='40px' bg='#df3b3b' color='white' onClick={() => handleRemove(id)}>
                          <DeleteIcon fontSize={15} />
                      </Circle>
                      </Tooltip>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          ://Se não possuir conteudo no db será informado que não possui cadastro
            <Box mt="20" ml="10" fontSize="20px">Não existe nenhum Pet Cadastrado
            </Box>
            }
          </Box>
        </Box>
        {isOpen && (
          <ModalComp
            isOpen={isOpen}
            onClose={onClose}
            data={data}
            setData={setData}
            dataEdit={dataEdit}
            setDataEdit={setDataEdit}
            db={db}
            setDB={setDB}
          />
        )}
      </Flex>
    </div>
  );
};

export default App;
