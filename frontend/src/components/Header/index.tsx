import Illustration from '../../assets/images/Illustration.svg';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <h1>Seja bem vindo ao<br /><span>PetAPP.</span></h1>

        <img src={Illustration} alt="Illustration" />
      </Content>
    </Container>
  );
}
