import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  border-radius: 15px;
  font-family: "Roboto";
  border-style: none;
  padding: 0.5rem 1.5rem;
  height: fit-content;
  font-size: calc(0.5vw + 0.5rem);
  font-weight: 500;
  color: #0c0b32;
  opacity: 0.8;
  transition: 0.2s all;
  cursor: pointer;
  &:active {
    outline: none;
  }
  &:hover {
    opacity: 1;
    /* #e7b9c8 */
  }
  background: #db9eb2;
  ${(props) =>
    css`
      background: ${props.color};
    `};
`;
