'use client'

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100vh;

  .nav {
    display: flex;
    justify-content: center;
  }
`

export const Button = styled.button`
  width: 120px;
  height: 40px;
  
  position: absolute;
  top: 50%;
  z-index: 1;

  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`