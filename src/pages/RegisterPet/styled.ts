import styled from 'styled-components';
import Colors from '../../styles/theme';

export const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const SignUpBack = styled.button`
  font-size: 1.3rem;
  font-weight: 600;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const SignUpHeadline = styled.p`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 80%;
    margin-top: 6rem;
  }

  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: ${Colors.text.dark};
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid #6c757d;
  width: 100%;
  text-align: center;
  margin-top: 2rem;
`;

export const SignUpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45rem;

  > img {
    margin-top: 19rem;
    width: 8rem;
  }

  @media (max-width: 400px) {
    > img {
      margin-top: 50rem;
    }
  }
`;

export const SignUpInputContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    width: 80%;
  }
  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`;

export const EnvyImg = styled.form`
  > div {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
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
