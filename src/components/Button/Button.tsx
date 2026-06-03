import React from 'react';
import type { ButtonProps } from './types.js';
import { ButtonComponent } from './styles.js';

export const Button = ({
  $variant = 'default',
  $size = 'default',
  $icon,
  $iconSide = 'right',
  $fullWidth = false,
  $contentSide = 'center',
  children,
  ...props
}: ButtonProps) => {
  return (
    <ButtonComponent
      $size={$size}
      $contentSide={$contentSide}
      $fullWidth={$fullWidth}
      $variant={$variant}
      {...props}
    >
      {$icon && $iconSide === 'left' && $icon}
      {children}
      {$icon && $iconSide === 'right' && $icon}
    </ButtonComponent>
  );
};
