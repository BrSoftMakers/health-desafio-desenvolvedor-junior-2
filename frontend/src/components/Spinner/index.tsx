import { StyledSpinner } from './styles';

interface SpinnerProps {
  size: number;
}

export function Spinner({ size }: SpinnerProps) {
  return <StyledSpinner size={size} />;
}
