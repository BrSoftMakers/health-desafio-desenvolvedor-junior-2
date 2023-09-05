import styled, { css } from "styled-components";

export const StyledBackButton = styled.div`
  position: absolute;
  top: 1.5vh;
  left: 1rem;
  border-radius: 15px;
  font-family: "Roboto";
  font-size: calc(1.2vh + 0.5rem);
  font-weight: 500;
  color: #0c0b32;
  opacity: 0.8;
  transition: 0.2s all;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;

  &:hover {
    opacity: 1;
  }

  .icon {
    font-size: calc(1vw + 0.5rem);
  }
`;
