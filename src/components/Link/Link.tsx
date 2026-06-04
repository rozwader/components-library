import React from 'react';
import { LinkComponent } from './styles.js';
import type { LinkProps } from './types.js';

export const Link = ({
  $color = '#4248f5',
  $icon,
  $iconSide = 'right',
  children,
  ...props
}: LinkProps) => {
  return (
    <LinkComponent $color={$color} {...props}>
      {$icon && $iconSide === 'left' && $icon}
      {children}
      {$icon && $iconSide === 'right' && $icon}
    </LinkComponent>
  );
};
