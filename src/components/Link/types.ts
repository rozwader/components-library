import type { ComponentPropsWithoutRef, ReactElement } from 'react';
import type { IconSide } from '../Button/types.js';

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  $color?: string;
  $icon?: ReactElement;
  $iconSide?: IconSide;
}
