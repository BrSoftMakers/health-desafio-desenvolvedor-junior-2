import Global from "./styles/global";
import { Container, Title } from "./styles/App";
import Form from "./components/form";
import Grid from "./components/grid";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


function App() {
  const [pets, setPets] = useState([]);
  const [onEdit, setOnEdit] = useState(null)

  const getPets = async () => {
    try {
      const res = await axios.get("http://localhost:3333/pets");
      setPets(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getPets();
  }, [setPets]);

  return (
    <>
      <Container>
        <Title>CADASTRE SEU PET</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getPets={getPets} />
        <Grid pets={pets} setPets={setPets} setOnEdit={setOnEdit} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <Global />
    </>
  );
}

export default App;
