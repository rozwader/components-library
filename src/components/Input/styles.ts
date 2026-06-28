import { styled } from 'styled-components';
import { theme } from '../../theme.js';

export const InputLabelComponent = styled.label<{ $fullWidth: boolean }>`
  ${({ $fullWidth }) => $fullWidth && `width: 100%;`};
  font-size: 10pt;
  padding: 8px;
  color: ${theme.colors.lightGray};

  &:has(+ input:focus) {
    color: ${theme.colors.primary};
    text-decoration: underline;
  }
`;

export const InputComponent = styled.input<{ $fullWidth: boolean }>`
  ${({ $fullWidth }) => ($fullWidth ? `width: 100%;` : `width: fit-content;`)}
  padding: 8px;
  border: 1px solid ${theme.colors.lightGray};
  border-radius: 6px;

  &:focus {
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    outline: none;
  }
`;
