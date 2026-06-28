import type { ComponentPropsWithRef, ReactElement } from 'react';
import type { IconSide } from '../Button/types.js';

export interface LinkProps extends ComponentPropsWithRef<'a'> {
  $color?: string;
  $icon?: ReactElement;
  $iconSide?: IconSide;
}
