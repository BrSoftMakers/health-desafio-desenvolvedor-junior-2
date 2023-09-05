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
