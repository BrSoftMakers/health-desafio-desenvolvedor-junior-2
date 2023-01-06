import { Cadastro, ContainerHeader, ContentHeader, Details } from './styled';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import logo from '../../assets/Icon/image/animal-dog.gif';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../assets/Icon';

export function Header() {
  const navigate = useNavigate();

  const handleCadastro = () => {
    navigate('/registerPet');
  };

  const handleHome = () => {
    navigate('/home');
  };

  return (
    <ContainerHeader>
      <ContentHeader>
        <Details>
          <button type="button" onClick={handleHome}>
            PetShop
          </button>
          <button type="button" onClick={() => signOut(auth)}>
            Sair <Icon name="x" size={18} />
          </button>
        </Details>
        <img src={logo} alt="logo" />
        <Cadastro onClick={handleCadastro}>Cadastrar Pet</Cadastro>
      </ContentHeader>
    </ContainerHeader>
  );
}
