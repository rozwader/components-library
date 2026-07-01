import { useId, useState } from 'react';
import type { CheckboxProps } from './types.js';
import { CheckboxComponent, CheckboxContent } from './styles.js';
import React from 'react';
import { theme } from '../../theme.js';

export const Checkbox = ({
  $sizeVariant = 'small',
  $contentSizeVariant,
  color = theme.colors.primary,
  children,
  disabled = false,
  name,
  value,
  onChange,
}: CheckboxProps) => {
  const labelId = useId();

  const handleClick = () => {
    onChange(!value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <CheckboxComponent
        name={name}
        aria-labelledby={labelId}
        color={color}
        onClick={handleClick}
        $sizeVariant={$sizeVariant}
        isChecked={value}
        disabled={disabled}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
      />
      <CheckboxContent
        id={labelId}
        $sizeVariant={
          $contentSizeVariant === undefined ? $sizeVariant : $contentSizeVariant
        }
      >
        {children}
      </CheckboxContent>
    </div>
  );
};
