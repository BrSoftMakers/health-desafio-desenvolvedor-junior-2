import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.color[200]};
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 158px;
    height: 158px;
  }

  span {
    color: ${({ theme }) => theme.color[50]};
    border-bottom: 1px solid ${({ theme }) => theme.color[50]};
  }
`;
