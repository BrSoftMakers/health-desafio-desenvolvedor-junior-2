import styled, { css } from "styled-components";

export const Page = styled.div`
  padding: 3% 8%;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #f8fafc;
  padding: 8%;
  box-sizing: border-box;
  box-shadow: 1px 1px 12px #6969692f;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Image = styled.img`
  width: 60%;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: calc(5vh);
`;

export const ActionDescription = styled.div``;

export const ActionDescriptionText = styled.p`
  font-size: calc(1.5vw + 0.5rem);
  border-style: none;
  border-left: 2px solid #9e9e9e;
  padding: 0.5rem 0 0.5rem 0.8rem;
  color: #9e9e9e;
  font-size: 1.2rem;
  font-weight: 300;
  width: 13rem;
`;

export const Title = styled.span`
  font-size: calc(4vw + 1rem);
  ${(props) =>
    css`
      color: ${props.color};
    `};
`;

export const TitleContainer = styled.h1`
  font-family: "Yeseva One";
  font-weight: 400;
  color: #413430;
  margin-bottom: 2.4rem;
`;

export const Options = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
`;
