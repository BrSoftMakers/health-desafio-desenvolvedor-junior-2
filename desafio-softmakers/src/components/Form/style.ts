import styled from 'styled-components';

export const Form = styled.form`
  background-color: var(--grey-3);
  border: 1px solid var(--grey-2);
  color: var(--grey-0);

  border-radius: 3.2px;
  padding: 1rem;
  margin-bottom: 2rem;

  .addPet-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    text-align: center;
    font-size: 0.875rem;
    font-weight: 700;
  }

  span {
    font-weight: 600;
    font-size: 0.75rem;

    text-align: center;
    color: var(--grey-1);
  }

  @media (min-width: 767px) {
    h2 {
      font-size: 1.125rem;
    }

    button {
      font-size: 1rem;
    }
  }
`;

export const Input = styled.div`
  display: inline-grid;
  justify-items: start;
  grid-gap: 0.625rem;
  margin: 0.25rem;

  label {
    font-size: 0.76rem;
    font-weight: 400;
  }

  p {
    font-size: 0.75rem;
    color: var(--negative-action);
  }

  input {
    width: 60vw;
    height: 2.5rem;
    max-width: 20.5rem;
  }

  input {
    padding-left: 10px;
    border-radius: 3.2px;
    box-sizing: border-box;
  }

  input:placeholder-shown,
  select:required:invalid {
    color: var(--grey-0);
    background-color: var(--grey-2);
    border: 1px solid var(--grey-2);
  }

  input:not(:placeholder-shown),
  select:not(:placeholder-shown) {
    color: var(--grey-0);
    border: 1px solid var(--grey-0);
    background-color: var(--grey-2);
  }
`;

export const Button = styled.button`
  border: 1.2px solid var(--color-primary);
  background-color: var(--color-primary);
  color: var(--white);

  border-radius: 4px;
  font-weight: 500;
  font-size: 0.8rem;

  width: 60vw;
  height: 2.5rem;
  max-width: 20.5rem;
`;
