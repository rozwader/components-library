import React from 'react';
import type { ButtonProps } from './types.js';
import { ButtonComponent } from './styles.js';

export const Button = ({
  content,
  variant = 'default',
  size = 'default',
  icon,
  iconSide = 'right',
}: ButtonProps) => {
  return (
    <ButtonComponent size={size} variant={variant}>
      {icon && iconSide === 'left' && icon}
      {content}
      {icon && iconSide === 'right' && icon}
    </ButtonComponent>
  );
};
