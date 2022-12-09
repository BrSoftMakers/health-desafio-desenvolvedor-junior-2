import styled from "styled-components";


export const Table = styled.table`
width: 100%;
background-color: #fff;
padding: 20px;
box-shadow: 0px 0px 5px #ccc;
border-radius: 5px;
max-width: 1120px;
margin: 20px auto;
word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Tbody = styled.tbody``;

export const Th = styled.th`
  text-aign: start;
  border-bottom: inset;
  padding-bottom: 5px;
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
`;
