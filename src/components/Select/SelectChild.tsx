import { SelectChildWrapper } from './styles.js';
import type { SelectChildProps } from './types.js';
import React from 'react';

export const SelectChild = ({
  children,
  $CURRENT_VALUE,
  $HANDLE_CLICK,
  value,
}: SelectChildProps) => {
  const handleClick = () => {
    if ($HANDLE_CLICK === undefined)
      throw new Error('$ON_CHANGE prop is undefined');

    $HANDLE_CLICK(value);
  };

  return (
    <SelectChildWrapper
      onClick={handleClick}
      $isCurrentValue={$CURRENT_VALUE === value}
    >
      {children}
    </SelectChildWrapper>
  );
};
