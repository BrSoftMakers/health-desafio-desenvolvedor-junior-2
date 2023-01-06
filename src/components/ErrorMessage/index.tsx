import { ReactNode } from 'react';
import { InputErrorMessageContainer } from './styled';

interface IErrorMessageProps {
  children: ReactNode;
}

export function ErrorMessage({ children }: IErrorMessageProps) {
  return (
    <>
      <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
    </>
  );
}
