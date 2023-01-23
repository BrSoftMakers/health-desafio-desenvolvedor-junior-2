import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  position: fixed;
  background-color: var(--grey-4);
  box-shadow: inset 0 -1px 0 var(--grey-3);

  > nav {
    padding: 13px;
    max-width: 1120px;

    margin: 0 auto;
    margin-top: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-weight: 700;
    font-size: 1.15rem;

    text-align: center;
    margin-bottom: 20px;
    color: var(--color-primary);
  }

  a {
    width: 4.97rem;
    height: 2rem;

    font-weight: 600;
    font-size: 0.6rem;

    padding-top: 10px;
    text-align: center;

    border: none;
    border-radius: 4px;
    color: var(--grey-0);
    background-color: var(--grey-3);
  }

  @media (min-width: 1000px) {
    h1 {
      font-size: 1.5rem;
    }

    button {
      font-size: 0.75rem;
    }
  }
`;

export default Header;
