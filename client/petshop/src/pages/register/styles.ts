import { styled } from "styled-components";

export const Page = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3% 8%;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const Card = styled.div`
  display: flex;
  gap: 5%;
  flex-direction: column;
  width: 90%;
  max-width: calc(10rem + 20vw);
  height: 100%;
  border-radius: 8px;
  background-color: #f8fafc;
  padding: 3rem;
  box-sizing: border-box;
  box-shadow: 1px 1px 12px #6969692f;
    height: 100%;
  overflow: hidden;
`;

export const FormContainer = styled.form`
  gap: 1rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: auto;

  Button {
    margin-top: auto;
  }
`;

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ImageWrapper = styled.img`
  margin-top: -7vh;
  width: 65%;
  opacity: 0.8;

  animation: bounce 4s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-10px);
    }
  }
`;

export const FormTitle = styled.h1`
  font-family: "Yeseva One";
  color: #081e4dce;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const Line = styled.hr`
  border-style: none;
  border-top: 1px solid #6969692f;
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  fieldset {
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 4px 8px 8px 8px;
    border-radius: 4px;
    border: 1px solid #cad3df;
    color: #647b99;
    gap: 10px;
    display: flex;

    legend {
      padding: 0 10px;
    }
  }

  label {
    display: flex;
    gap: 0.5rem;
    color: #081e4dce;
    font-size: 14px;
  }
`;
