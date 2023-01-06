import { ReactNode, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../contexts/user.context';

import { Loading } from '../components/Loading';

interface IAuthenticationGuard {
  children: ReactNode;
}

export const AuthenticationGuard = ({ children }: IAuthenticationGuard) => {
  const { isAuthenticated } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/');
      }, 4000);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <>
        <Loading message="Você precisa estar logado para acessar esta página. Você será redirecionado para a página de login em instantes..." />
      </>
    );
  }

  return <>{children}</>;
};
