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

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 350px;
  padding: 50px;
  background-color: ${({ theme }) => theme.color[50]};
  border-radius: 18px;
  position: relative;

  input[type="file"] {
    display: none;
  }

  label {
    padding: 20px 10px;
    width: 200px;
    background: ${({ theme }) => theme.color[200]};
    color: #FFF;
    text-transform: uppercase;
    border-radius: 4px;
    text-align: center;
    display: block;
    margin-top: 10px;
    cursor: pointer;
    transition: background 0.5s ease;

      &:hover {
      background: ${({ theme }) => theme.color[500]};
    }
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

export const ContainerButton = styled.div`
  margin-top: 16px;

  button {
    width: 200px;
  }
`;
