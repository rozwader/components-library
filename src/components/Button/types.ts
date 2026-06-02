import type { ReactElement } from 'react';

export interface ButtonProps {
  content: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactElement;
  iconSide?: ButtonIconSide;
}

export type ButtonVariant = 'primary' | 'secondary' | 'default';
export type ButtonSize = 'small' | 'default' | 'big';
export type ButtonIconSide = 'left' | 'right';
