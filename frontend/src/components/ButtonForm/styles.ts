import styled from 'styled-components';

export const Container = styled.button`
  height: 52px;
  border: none;
  padding: 0 16px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.5s ease;
  background-color: ${({ theme }) => theme.color[200]};
  color: ${({ theme }) => theme.color[50]};

  &:hover {
    background-color: ${({ theme }) => theme.color[500]};
  }

  &:active {
    background-color: ${({ theme }) => theme.color[100]};
  }

  &[disabled] {
    cursor: not-allowed !important;
    background-color: ${({ theme }) => theme.color[800]} !important;
  }
`;
