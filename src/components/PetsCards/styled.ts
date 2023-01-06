import styled from 'styled-components';
import Colors from '../../styles/theme';

export const ContainerPets = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

export const ContentPets = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-flow: row wrap;
  margin: 3rem 0 4rem 0;
`;

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  > p {
    font-size: 1.6rem;
    color: ${Colors.text.dark};
  }
  span {
    font-size: 1.6rem;
    font-weight: bold;
    color: ${Colors.text.dark};
  }
`;
