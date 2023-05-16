import { useState } from 'react';
import { Card, CardHeader, Avatar, styled } from '@mui/material';
import Modal from 'react-modal';
import gatoAssustado from '../../assets/image/gato-assustado.png';
import cachorroBravo from '../../assets/image/cachorobravo.png';


const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: 250,
  margin: '0 auto',
  padding: 20,
  border: '3px solid #000080',
  borderRadius: '8px',
});


const Content = styled('div')({
  textAlign: 'center',
  fontWeight: 400,
  margin: '10px auto',
  fontSize: '22px'
});
function PetDetails({ pet }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const getAvatarImage = () => {
    if (pet.especie.toLowerCase() === 'gato') {
      // Retorne a imagem para gato
      return <Avatar sx={{ width: 80, height: 80 }} alt={pet.nome} src={gatoAssustado} />;
    } else if (pet.especie.toLowerCase() === 'cachorro') {
      // Retorne a imagem para cachorro
      return <Avatar sx={{ width: 80, height: 80 }} alt={pet.nome} src={cachorroBravo} />;
    } else {
      // Retorne uma imagem padrão para outros animais
      return <Avatar>{pet.nome ? pet.nome[0].toUpperCase() : ''}</Avatar>;
    }
  };
  return (
    <StyledCard style={{ background: 'linear-gradient(rgb(87 89 245), rgb(255, 255, 255)' }}>
      <CardHeader
        avatar={getAvatarImage()}
        title={pet.nome}
        subheader={`ID: ${pet.id}`}
      />
      <Content>
        <p><strong>Nome</strong>: {pet.nome}</p>
        <p><strong>Dono</strong>: {pet.dono}</p>
        <p><strong>Raça</strong>: {pet.raca}</p>
      </Content>

      <Modal isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)}>
        <div>
          <h2>Detalhes do Pet</h2>
          <p>ID: {pet.id}</p>
          <p>Nome: {pet.nome}</p>
        </div>
      </Modal>
    </StyledCard>
  );
}

export default PetDetails;
