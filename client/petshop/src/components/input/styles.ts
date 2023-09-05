import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  flex-direction: column;
`;

export const FormInput = styled.input`
  border-radius: 4px;
  border-style: none;
  box-shadow: 1px 1px 4px #0000001f;
  padding: 8px 12px;
  box-sizing: border-box;
  background: white;
  transition: 0.2s all;
  color: #0c2a71ff;

  &:focus {
    box-shadow: 1px 1px 4px #0000003f;
    outline: none;
  }

  &.error {
    box-shadow: 1px 1px 4px #fa040493;
  }
`;

export const FormLabel = styled.label`
  color: #0c2a71b2;
  font-family: Roboto;
  font-size: 0.8rem;
  font-weight: 500;
`;
