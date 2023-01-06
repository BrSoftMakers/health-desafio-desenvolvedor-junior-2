import PacmanLoader from 'react-spinners/PacmanLoader';

import { LoadingContainer } from './styled';
interface ILoadingProps {
  message?: string;
}

export function Loading({ message }: ILoadingProps) {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <PacmanLoader size={80} color={'#836FFF'} />
    </LoadingContainer>
  );
}
