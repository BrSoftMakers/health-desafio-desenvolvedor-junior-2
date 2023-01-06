import React, { ButtonHTMLAttributes } from 'react';
import { CustomButtonContainer, IconContainer } from './styled';

interface ICustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode;
}

export function CustomButton({
  startIcon,
  children,
  ...rest
}: ICustomButtonProps) {
  return (
    <CustomButtonContainer {...rest}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}

      {children}
    </CustomButtonContainer>
  );
}
