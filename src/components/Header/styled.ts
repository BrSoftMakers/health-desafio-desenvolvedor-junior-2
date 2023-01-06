import styled from 'styled-components';
import Colors from '../../styles/theme';

export const ContainerHeader = styled.header`
  background: ${Colors.background.violet};

  display: flex;
  justify-content: center;
  height: 12.4rem;
  align-items: center;

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const ContentHeader = styled.div`
  width: 100%;
  max-width: 76rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 11rem;
  }

  @media (max-width: 600px) {
    justify-content: center;
    gap: 3rem;

    > img {
      width: 5rem;
    }
  }
`;

export const Details = styled.div`
 > button {
    background: transparent;
    font-size: 3rem;
    color: ${Colors.text.white};
  }
  > button {
    margin-top: 1rem;
    background: transparent;
    border: 0;
    color: ${Colors.text.white};

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2rem;
    gap: 2rem;
  }

  @media (max-width: 600px) {

      h1{
        font-size: 1.5rem;
      }

      button{
        font-size: 1.2rem;
        gap: 1rem;
      }
  }

`;

export const Cadastro = styled.button`
  background: transparent;
  color: ${Colors.text.white};
  font-size: 2rem;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;
