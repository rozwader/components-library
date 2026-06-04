import { styled } from 'styled-components';

export const LinkComponent = styled.a<{ $color: string }>`
  color: ${({ $color }) => $color};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  width: fit-content;

  &:hover {
    color: ${({ $color }) => `${$color}9a`};
  }
`;
