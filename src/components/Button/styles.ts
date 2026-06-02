import { styled } from 'styled-components';
import { theme } from '../../theme.js';
import type { ButtonSize, ButtonVariant } from './types.js';

const getBackgroundColor = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return theme.colors.dark;
    case 'secondary':
      return theme.colors.primary;
    default:
      return theme.colors.main;
  }
};

const getFontColor = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
    case 'secondary':
      return theme.colors.main;
    default:
      return theme.colors.dark;
  }
};

const getShadowColor = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return theme.colors.darkDimmed;
    case 'secondary':
      return theme.colors.primaryDimmed;
    default:
      return theme.colors.mainDimmed;
  }
};

const setSize = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return `
                padding: 6px 18px;
                font-size: 11pt;
                border-radius: 8px;
            `;
    case 'big':
      return `
                padding: 10px 22px;
                font-size: 18pt;
                border-radius: 10px;
            `;
    default:
      return `
                padding: 8px 20px;
                font-size: 15pt;
                border-radius: 8px;
            `;
  }
};

export const ButtonComponent = styled.button<{
  variant: ButtonVariant;
  size: ButtonSize;
}>`
  border: none;
  ${({ size }) => setSize(size)}
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  box-shadow: 0px 4px 0px ${({ variant }) => getShadowColor(variant)};

  color: ${({ variant }) => getFontColor(variant)};
  background-color: ${({ variant }) => getBackgroundColor(variant)};

  cursor: pointer;

  &:hover {
    box-shadow: none;
    transform: translateY(4px);
  }
`;
