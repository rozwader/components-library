import { styled } from 'styled-components';
import { theme } from '../../theme.js';

export const SelectButtonComponent = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${theme.colors.main};
  border: 1px solid ${theme.colors.lightGray};
  padding: 4px 8px;
  border-radius: 6px;

  &:focus {
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }

  width: 100%;
`;

export const SelectButtonLabelComponent = styled.label`
  width: 100%;
  font-size: 10pt;
  padding: 8px;
  color: ${theme.colors.lightGray};

  &:has(+ button:focus) {
    color: ${theme.colors.primary};
    text-decoration: underline;
  }
`;

export const SelectListComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  outline: 1px solid ${theme.colors.lightGray};
  border-radius: 6px;

  & > *:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.lightGray};
  }
`;

export const SelectChildWrapper = styled.button<{ $isCurrentValue: boolean }>`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  background-color: ${theme.colors.main};
  border: none;
  padding: 8px;
  cursor: pointer;

  ${({ $isCurrentValue }) =>
    $isCurrentValue &&
    `border-color: ${theme.colors.primary}; color: ${theme.colors.primary}`};

  &:hover {
    background-color: ${theme.colors.mainDimmed};
  }
`;
