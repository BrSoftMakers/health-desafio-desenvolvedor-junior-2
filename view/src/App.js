//IMPORTANDO ESTILIZAÇÕES GLOBAIS
import GlobalStyle from "./styles/global";
//IMPORTANDO O STYLED COMPONENTES
import styled from "styled-components";
//IMPORTANDO OS COMPONENTES DOS FORMS
import Form from "./components/Form";
//IMPORTANDO OS COMPONENTES DO GRID
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
//IMPORTANDO O TOASTIFY QUE RETORNA FEEDEBACK EM TELA
import { toast, ToastContainer } from "react-toastify";
//IMPORTANDO ESTILIZAÇÃO DA BIBLIOTECA TOASTIFY
import "react-toastify/dist/ReactToastify.css";
import { getUsers } from "./hooks/Users";


//ESTILIZANDO O CONTAINER CENTRAL 
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

//ESTILIZANDO O TÍTULO
const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  useEffect(() => {
    getUsers(setUsers);
  }, [setUsers]);

  return (
    <>
      <Container>
        <Title>PET'S</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} setUsers={setUsers} />
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers}  getUsers={getUsers} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;