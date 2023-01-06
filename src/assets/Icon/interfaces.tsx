import { IconName } from './types';
import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
}
