import React from 'react';
import { IconProps } from './interfaces';
import IconsTypes from './types';

export const Icon: React.FC<IconProps> = ({ name, size = 24, ...props }) => {
  const Icon = IconsTypes[name];
  return <Icon width={size} height={size} {...props} />;
};
