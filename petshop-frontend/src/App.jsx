import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useBreakpointValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ModalComp from "./components/ModalComp";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});


  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  const getPets = async () => {
    const response = await axios.get("http://localhost:3333/pets")
    setData(response.data)
  }
  
  const handleDelete = async (Id) =>{
    const response = await axios.delete(`http://localhost:3333/pets/${Id}`)
    getPets()
  }

  useEffect(() => {
    getPets()
  }, [])

  return (
    <Flex
      h="100vh"
      align="center"
      justify="center"
      fontSize="20px"
      fontFamily="poppins"
    >
      <Box maxW={1000} w="100%" h="100vh" py={10} px={2}>
        <Button colorScheme="blue" onClick={() => [setDataEdit({}), onOpen()]}>
          NOVO CADASTRO
        </Button>

        <Box overflowY="auto" height="100%">
          <Table mt="6">
            <Thead>
              <Tr>
                <Th maxW={isMobile ? 5 : 100} fontSize="16px">
                  Nome
                </Th>
                <Th maxW={isMobile ? 5 : 100} fontSize="16px">
                  Idade
                </Th>
                <Th maxW={isMobile ? 5 : 100} fontSize="16px">
                  Epécie
                </Th>
                <Th maxW={isMobile ? 5 : 100} fontSize="16px">
                  Raça
                </Th>
                <Th maxW={isMobile ? 5 : 100} fontSize="16px">
                  Dono
                </Th>
                <Th maxW={isMobile ? 5 : 100} fontSize="16px">
                  Telefone
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({ name, Id, age, animal, race, ownerName, tel }, index) => (
                
                <Tr key={index} cursor="pointer " _hover={{ bg: "gray.100" }}>
                  <Td maxW={isMobile ? 5 : 100}>{name}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{age}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{animal}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{race}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{ownerName}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{tel}</Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({ name, age, animal, race, ownerName, tel, Id }),
                        onOpen(),
                      ]}
                    />
                  </Td>
                  <Td p={0}>
                    <DeleteIcon
                      fontSize={20}
                      onClick={() => handleDelete(Id)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
      {isOpen && (
        <ModalComp
          getPets={getPets}
          isOpen={isOpen}
          onClose={onClose}
          data={data}
          setData={setData}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
        />
      )}
    </Flex>
  );
};

export default App;
