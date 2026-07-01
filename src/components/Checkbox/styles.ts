import { styled } from 'styled-components';
import type { CheckboxSizeVariant } from './types.js';
import { theme } from '../../theme.js';

const DEFAULT_CHECKBOX_SIZE = 17;
const DEFAULT_CONTENT_FONT_SIZE = 10;

const getCheckboxSize = (size: CheckboxSizeVariant) => {
  switch (size) {
    case 'small':
      return `
                width: ${DEFAULT_CHECKBOX_SIZE}px;
                height: ${DEFAULT_CHECKBOX_SIZE}px;
                border-radius: 4px;
                border: 1px solid;
            `;
    case 'medium':
      return `
                width: ${DEFAULT_CHECKBOX_SIZE + 3}px;
                height: ${DEFAULT_CHECKBOX_SIZE + 3}px;
                border-radius: 6px;
                border: 2px solid;
            `;
    case 'big':
      return `
                width: ${DEFAULT_CHECKBOX_SIZE + 6}px;
                height: ${DEFAULT_CHECKBOX_SIZE + 6}px;
                border-radius: 8px;
                border: 3px solid;
            `;
  }
};

const getContentSize = (size: CheckboxSizeVariant) => {
  switch (size) {
    case 'small':
      return `
                font-size: ${DEFAULT_CONTENT_FONT_SIZE}pt;
                margin-left: 7px;
            `;
    case 'medium':
      return `
                font-size: ${DEFAULT_CONTENT_FONT_SIZE + 2}pt;
                margin-left: 10px;
            `;
    case 'big':
      return `
                font-size: ${DEFAULT_CONTENT_FONT_SIZE + 4}pt;
                margin-left: 13px;
            `;
  }
};

export const CheckboxComponent = styled.button<{
  $sizeVariant: CheckboxSizeVariant;
  isChecked: boolean;
  color: string;
  disabled: boolean;
}>`
  ${({ $sizeVariant }) => $sizeVariant && getCheckboxSize($sizeVariant)}
  cursor: pointer;

  padding: 2px;
  border-color: ${theme.colors.main};
  outline: 1px solid
    ${({ disabled }) => (disabled ? theme.colors.lightGray : theme.colors.dark)};
  background-color: ${({ isChecked, color }) =>
    isChecked ? color : theme.colors.main};

  &:focus {
    outline: 1px dashed ${theme.colors.dark};
  }
`;

export const CheckboxContent = styled.p<{ $sizeVariant: CheckboxSizeVariant }>`
  margin: 0;
  ${({ $sizeVariant }) => $sizeVariant && getContentSize($sizeVariant)}

  color: ${theme.colors.lightGray};
  width: fit-content;
`;
