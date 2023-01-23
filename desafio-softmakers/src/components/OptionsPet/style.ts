import styled from 'styled-components';

export const ContainerPets = styled.div`
  color: var(--grey-0);

  ul {
    display: flex;
    flex-wrap: nowrap;
    background-color: var(--grey-2);
    li {
      width: 7rem;
      height: 10rem;

      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      border: 1px solid var(--grey-1);
      padding: 5px;
    }
  }

  .options {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin-top: 1.25rem;
  }

  .options div {
    padding: 5px;
    cursor: pointer;
  }
`;
