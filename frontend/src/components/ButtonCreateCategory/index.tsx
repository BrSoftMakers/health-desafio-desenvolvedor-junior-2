import { Container } from './styles';

interface ButtonCreateCategoryProps {
  children: string;
  onClick: () => void;
}

export function ButtonCreateCategory({ children, onClick }: ButtonCreateCategoryProps) {
  return (
    <Container onClick={onClick}>
      {children}
    </Container>
  );
}
