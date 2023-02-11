import styled from 'styled-components';

export const Container = styled.button`
  background-color: transparent;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color[200]};
  border-radius: 48px;
  opacity: 0.9;
  box-shadow: 0 0 10px #999;
  transition: all .7s ease;

  &:hover {
    box-shadow: 0 0 12px #fff;
    opacity: 1;
  }
`;
