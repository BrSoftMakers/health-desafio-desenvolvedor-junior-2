import { Spinner } from '../Spinner';
import { Container } from './styles';

interface ButtonFormProps {
  type: 'button' | 'submit';
  disabled?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export function ButtonForm({ type, disabled, isLoading, children, onClick }: ButtonFormProps) {
  return (
    <Container
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </Container>
  );
}
