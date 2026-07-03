import type { ComponentPropsWithRef, ReactElement } from 'react';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  $variant?: ButtonVariant;
  $size?: ButtonSize;
  $icon?: ReactElement;
  $iconSide?: IconSide;
  $fullWidth?: boolean;
  $contentSide?: ButtonContentSide;
}

export type ButtonVariant = 'primary' | 'secondary' | 'default' | 'danger';
export type ButtonSize = 'small' | 'default' | 'big';
export type IconSide = 'left' | 'right';
export type ButtonContentSide = 'left' | 'center' | 'right';
