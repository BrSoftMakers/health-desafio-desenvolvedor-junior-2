import styled from 'styled-components';
import Colors from '../../styles/theme';

interface PetImageProps {
  imageUrl: string;
}

export const PetContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
`;

export const DeletePet = styled.button`
  background: transparent;
  margin: 1rem;
`;

export const EditPet = styled.button`
  background: transparent;
  margin: 1rem;
`;

export const PetInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: flex-start;
  margin: 1rem;

  p {
    font-size: 1.1rem;
    color: ${Colors.text.dark};
  }

  strong {
    font-weight: bold;
    margin-bottom: 0.2rem;
    font-size: 1.2rem;
  }
`;

export const OwnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: flex-start;
  margin: 0 1rem 1rem 1rem;

  p {
    font-size: 1.1rem;
    color: ${Colors.text.dark};
  }

  strong {
    font-weight: bold;
    margin-bottom: 0.2rem;
    font-size: 1.2rem;
  }
`;

export const PetImage = styled.div<PetImageProps>`
  display: flex;
  justify-content: space-around;
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 28rem;
  width: 20rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-end;
  transition: all 0.3s ease;
  background-color: transparent;
  background-blend-mode: color;
`;
