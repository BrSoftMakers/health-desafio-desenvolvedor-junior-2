import styled from 'styled-components';

export const Select = styled.select`
  margin-top: 8px;
  width: 200px;
  height: 52px;
  border: none;
  outline: none;
  padding: 0px 16px;
  font-size: 16px;
  appearance: none;
  border-radius: 4px;
  transition: border-color 0.2s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  color: ${({ theme }) => theme.color[200]};
  border: 2px solid ${({ theme }) => theme.color[200]};

  &:focus {
    border-color: ${({ theme }) => theme.color[500]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color[200]};
  }

  &[disabled] {
    border-color: ${({ theme }) => theme.color[100]};
    background-color: ${({ theme }) => theme.color[100]};
  }
`;
