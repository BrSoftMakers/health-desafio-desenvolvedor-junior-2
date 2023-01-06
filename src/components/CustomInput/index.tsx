import React, { FunctionComponent, InputHTMLAttributes } from 'react';

import { CustomInputContainer } from './styled';

interface ICustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const CustomInput: FunctionComponent<ICustomInputProps> =
  React.forwardRef((props, ref) => {
    return <CustomInputContainer {...props} ref={ref as any} />;
  });

CustomInput.displayName = 'CustomInput';
