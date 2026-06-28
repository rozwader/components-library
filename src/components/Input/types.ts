import type { ComponentPropsWithRef } from 'react';

export interface InputProps extends ComponentPropsWithRef<'input'> {
  $fullWidth?: boolean;
  $labelContent?: string;
}
