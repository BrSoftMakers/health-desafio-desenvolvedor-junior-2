'use client'

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100vh;

  h1, .nav {
    z-index: 1;
  }

  .register {
    width: 160px;
    height: 28px;
    background-color: #2ecc71;
    color: #fff;
    font-weight: bolder;
    margin-top: 12px;
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 500px;
  overflow-y: scroll;
  z-index: 1;
`