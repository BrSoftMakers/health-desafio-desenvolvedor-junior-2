import { styled } from "styled-components";

export const Page = styled.div`
  padding: 3% 8%;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 8px;
  background-color: #f8fafc;
  padding: 8%;
  box-sizing: border-box;
  box-shadow: 1px 1px 12px #6969692f;
`;

export const Line = styled.hr`
  border-style: none;
  border-top: 1px solid #6969692f;
`;
export const AccordionContainer = styled.div`
  #acordeonTitle {
    color: #0c2a71ff;
    font-family: Roboto;
    font-weight: 400;
    font-size: 1rem; 
    padding-left: 1rem;
  }

  .acordeonContent {
    color: #0c2a71ff;
    font-family: Roboto;
  }

  .petIcon {
    color: #0c2a71ff;
    padding: 0.2rem;
  }
`;

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 0.1rem;
  
  .editIcon {
    padding-top: 0.2rem;
    color: #0c2a71ff;
    margin-left: auto;
  }

  button {
    width: 3%;
    cursor: pointer;
    background: none;
    border-style: none;
  }
`;

export const PageTitle = styled.h1`
  font-family: "Yeseva One";
  color: #081e4dce;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
`;
