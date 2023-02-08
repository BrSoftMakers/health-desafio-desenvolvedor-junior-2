import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 2rem;
  background-color: var(--grey-4);
  box-shadow: inset 0 -1px 0 var(--grey-3);

  h1 {
    font-weight: 700;
    font-size: 1.15rem;

    text-align: center;
    line-height: 2rem;
    color: var(--color-primary);
  }

  @media (min-width: 1000px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export default Header;
