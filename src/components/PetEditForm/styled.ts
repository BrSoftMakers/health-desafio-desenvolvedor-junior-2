import styled from 'styled-components';
import Colors from '../../styles/theme';

export const EditContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditBack = styled.button`
    font-size: 1.3rem;
    font-weight: 600;
    background: transparent;
    display: flex;
    align-items: center;
    gap: 2px;
`;

export const EditHeadline = styled.p`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 80%;
    margin-top: 60px;
  }

  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: ${Colors.text.dark};
  padding-bottom: 20px;
  border-bottom: 1px solid #6c757d;
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;

export const EditContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
`;

export const EditInputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    width: 80%;
  }
  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }
`;

export const EnvyImgEdit = styled.form`
  > div {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    align-items: center;
    text-align: center;

    button {
      background-color: ${Colors.input.background};
      box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 1rem;
      padding: 0.5rem 1rem 0.5rem 1rem;
      color: ${Colors.text.dark};
    }
  }
`;
