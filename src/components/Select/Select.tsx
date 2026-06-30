import {
  SelectButtonComponent,
  SelectButtonLabelComponent,
  SelectListComponent,
} from './styles.js';
import React, {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactElement,
} from 'react';
import type { SelectChildProps, SelectProps } from './types.js';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

export const Select = ({
  $fullWidth = false,
  value,
  $onChange,
  children,
  $labelContent,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const parentComponentRef = useRef<HTMLDivElement>(null);

  const displayValue = React.useMemo(() => {
    // Function for memorizing display value of currently selected child
    return (
      Object.values(children as object).find(
        (child) => child.props.value === value,
      ).props.children || 'N/F'
    );
  }, [value, children]);

  const handleOptionClick = (optionValue: string) => {
    $onChange(optionValue);
    setIsOpen(false);
  };

  const handleUnfocus = (event: PointerEvent) => {
    if (!parentComponentRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (parentComponentRef.current === null) return;
    setTimeout(() => {
      document.addEventListener('click', handleUnfocus);
    }, 0);

    return () => document.removeEventListener('click', handleUnfocus);
  }, [isOpen]);

  return (
    <div
      ref={parentComponentRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: $fullWidth ? '100%' : 'max-content',
      }}
    >
      {$labelContent !== undefined && (
        <SelectButtonLabelComponent>{$labelContent}</SelectButtonLabelComponent>
      )}

      <SelectButtonComponent onClick={() => setIsOpen(!isOpen)}>
        {displayValue}
        {isOpen ? (
          <KeyboardArrowUp style={{ marginLeft: '5px' }} />
        ) : (
          <KeyboardArrowDown style={{ marginLeft: '5px' }} />
        )}
      </SelectButtonComponent>
      {isOpen && (
        <SelectListComponent>
          {Children.map(children, (child) => {
            if (!isValidElement(child)) return child;

            return cloneElement(child as ReactElement<SelectChildProps>, {
              $CURRENT_VALUE: value,
              $HANDLE_CLICK: handleOptionClick,
            });
          })}
        </SelectListComponent>
      )}
    </div>
  );
};
