import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #a3a3a3;
  border-bottom: 2px solid #666666;

  a img {
    object-fit: contain;
    width: 50px;
    cursor: pointer;
  }
`;

export const PageLink = styled.ul`
  display: flex;
  list-style: none;
`;