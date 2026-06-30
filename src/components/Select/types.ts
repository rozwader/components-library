import type { ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react';

export interface SelectProps extends ComponentPropsWithRef<'select'> {
  $fullWidth?: boolean;
  $labelContent?: string;
  value: string;
  $onChange: (value: string) => void;
}

export interface SelectChildProps extends ComponentPropsWithRef<'button'> {
  value: string;
  $HANDLE_CLICK?: (value: string) => void;
  $CURRENT_VALUE?: string;
}
