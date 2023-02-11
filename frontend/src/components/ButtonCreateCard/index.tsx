import { Container } from './styles';

interface ButtonCreateCardProps {
  children: React.ReactNode
  onClick: () => void;
}

export function ButtonCreateCard({ children, onClick }: ButtonCreateCardProps) {
  return (
    <Container onClick={onClick} >
      {children}
    </Container>
  );
}
