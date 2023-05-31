'use client'

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100vh;

  h1 {
    z-index: 1;
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