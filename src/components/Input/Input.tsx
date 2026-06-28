import { InputComponent, InputLabelComponent } from './styles.js';
import type { InputProps } from './types.js';
import React from 'react';

export const Input = ({
  $fullWidth = false,
  $labelContent = undefined,
  ...props
}: InputProps) => {
  return (
    <>
      {$labelContent !== undefined && (
        <InputLabelComponent $fullWidth={$fullWidth} htmlFor={props.id}>
          {$labelContent}
        </InputLabelComponent>
      )}
      <InputComponent $fullWidth={$fullWidth} {...props} />
    </>
  );
};
