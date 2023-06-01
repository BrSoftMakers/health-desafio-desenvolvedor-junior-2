'use client'

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: red;

 form {
  z-index: 1;
 }

 .save{
      background-color: #2ecc71;
    }

  .cancel {
    background-color: red;
  }

 form {
  padding: 10px;
  background-color: #fff;
  border: solid 4px burlywood;
  height: 70%;
  position: relative;

  input {
    width: 100%;
    height: 24px;
    margin-bottom: 10px;
  }

  button {
    width: 160px;
    height: 28px;
    color: #fff;
    font-weight: bolder;
    margin-top: 12px;
    margin-right: 8px;

    &:hover {
      cursor: pointer;
    }
  }
 }
`