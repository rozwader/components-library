import type { ComponentPropsWithoutRef, ReactElement } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  $variant?: ButtonVariant;
  $size?: ButtonSize;
  $icon?: ReactElement;
  $iconSide?: ButtonIconSide;
  $fullWidth?: boolean;
  $contentSide?: ButtonContentSide;
}

export type ButtonVariant = 'primary' | 'secondary' | 'default';
export type ButtonSize = 'small' | 'default' | 'big';
export type ButtonIconSide = 'left' | 'right';
export type ButtonContentSide = 'left' | 'center' | 'right';
