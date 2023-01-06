import styled from 'styled-components';
import Colors from '../../styles/theme';

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginHeadline = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: ${Colors.text.dark};
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45rem;
    >img{
      width: 10rem;
    }
`;

export const LoginSubtitle = styled.p`
  color: ${Colors.text.dark};
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid #6c757d;
  width: 100%;
  margin-top: 2rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const LoginInputContainer = styled.div`
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
