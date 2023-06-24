import GlobalStyle from "./styles/global";
import styled from "styled-components";
import PetForm from './components/PetForm';
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";



const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Navbar = styled.nav`
  width: 100%;
 background-color: cadetblue;
  padding: 10px 0;
  display: flex;
  

  display: block;
`;

const Logo = styled.h1`
  color: white;
  font-size: 24px;
  float: left;
  margin-top: -0%;
 
`;

const Title = styled.h2`
  color: #2c73d2;
  font-size: 35px;
`;

function App() {
  const [pets, setPets] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getPets = async () => {
    try {
      const res = await axios.get("http://localhost:3000/pets");
      setPets(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error("Erro ao obter os animais de estimação");
    }
  };

  const addPet = async (newPet) => {
    try {
      await axios.post("http://localhost:3000/pets", newPet);
      getPets();
      toast.success("Animal de estimação adicionado com sucesso");
    } catch (error) {
      toast.error("Erro ao adicionar o animal de estimação");
    }
  };

  const deletePet = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/pets/${id}`);
      getPets();
      toast.success("Animal de estimação excluído com sucesso");
    } catch (error) {
      toast.error("Erro ao excluir o animal de estimação");
    }
  };

  useEffect(() => {
    getPets();
  }, []);

  return (
    <>
      <Navbar>
        <Logo>SEU-PET</Logo>
        </Navbar>
      <Container>
        <Title>ANIMAIS DE ESTIMAÇÃO</Title>
        <Title style={{ color: 'green', fontSize: '24px' }}>"CADASTRE SEU PET"</Title>
        <PetForm onEdit={onEdit} setOnEdit={setOnEdit} getPets={getPets} addPet={addPet} />
        <Grid pets={pets} setPets={setPets} setOnEdit={setOnEdit} deletePet={deletePet} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
