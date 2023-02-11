import styled from 'styled-components';

export const Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  background: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 350px;
  padding: 50px;
  background-color: ${({ theme }) => theme.color[50]};
  border-radius: 18px;
  position: relative;

  small {
    margin-bottom: 8px;
  }
`;

export const CloseButton = styled.button`
  line-height: 0;
  background-color: transparent;
  border: none;
  position: absolute;
  right: 20px;
  top: 20px;
`;


